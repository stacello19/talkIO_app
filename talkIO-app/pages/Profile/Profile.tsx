import React, { VFC, useContext, useCallback, useMemo, useState, useEffect } from 'react';
import { Wrapper, ChatHeader, SideNav } from './styles';
import { UserContext } from '@utils/context/userContext';
import { getApi } from '@utils/api';
import List from '@components/Basic/List';
import Chat from '@components/Basic/Chat';

import gravatar from 'gravatar';
import axios from 'axios';
import useSWR from 'swr';

interface MsgProps {
  message: string;
  id: string;
  user: {
    firstName: string;
    lastName: string;
    nickname: string;
  }
}

const LogIn: VFC = () => {
  const [userContext] = useContext(UserContext);
  const token = useMemo(() => userContext.token ?? '',[userContext]);
  const [activeRoom, setActiveRoom] = useState<string>('');

  const { data: userData } = useSWR(token && ['/api/user/me', token], getApi)
  const { data: roomData, mutate: roomRevalidate } = useSWR(token && ['/api/room/myRooms', token], getApi);
  const { data: chatData, mutate: chatRevalidate } = useSWR(activeRoom.length > 0 && [`/api/message/${activeRoom}`, token], getApi);
  const { data: usersData } = useSWR(activeRoom.length > 0 && [`/api/room/${activeRoom}`, token], getApi);

  const usersList = useMemo(() => {
    if (!usersData) return [];
    return usersData.users.map((user: { firstName: string; lastName: string; }) => `${user.firstName} ${user.lastName}`);
  },[usersData]);

  const handleCreateRoom = useCallback(async() => {
    const { data } = await axios.post('/api/room/create', {}, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    roomRevalidate();
    handleActiveRoom(data.id)
  },[userContext, token, roomRevalidate]);

  const handleDeleteRoom = useCallback(async(id) => {
    await axios.delete(`/api/room/${id}`, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    roomRevalidate();
  },[userContext, token, roomRevalidate]);

  const handleActiveRoom = useCallback(async (id) => {
    if (activeRoom === id) return;
    setActiveRoom(id);
  },[activeRoom]);

  

  if (!userData) {
    return <div>Loading...</div>
  }

  return(
    <div style={{ display: 'flex', height: 'calc(100% - 80px)', width: '100%' }}>
      
      <SideNav>
        <List 
          roomData={roomData}
          handleCreateRoom={handleCreateRoom}
          handleDeleteRoom={handleDeleteRoom}
          handleActiveRoom={handleActiveRoom}
          activeRoom={activeRoom}
        />
      </SideNav> 

      <div style={{ height: '100%', width: '100%' }}>
        <ChatHeader>
          <img src={gravatar.url(usersList, { s: '30px', d: 'wavatar' })} alt={usersList} />
          <div>{usersList}</div>
        </ChatHeader>
        <Wrapper>
          <Chat 
            roomId={activeRoom} 
            token={token}
            chatRevalidate={chatRevalidate}
          >
            { chatData?.message?.map((el: MsgProps, i: number) => {
            return(
              <div key={i} style={{ padding: '1rem', border: '1px solid back', margin : '1rem'}}>
                <div>{`${el.user.firstName} ${el.user.lastName} (${el.user.nickname})`}</div>
                <div>{el.message}</div> 
              </div>
            )
          })}
          </Chat>
        </Wrapper>
      </div>

    </div>
  )
};

export default LogIn;