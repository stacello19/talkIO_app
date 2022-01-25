import React, { FC } from 'react';
import { ChatList } from './styles';
import { Delete } from '@styles/icons';

import gravatar from 'gravatar';

interface ListProps {
  roomData: {
    data: Array<{ name: string; _id: string; personal: boolean; }>;
  };
  activeRoom: string;
  handleCreateRoom: (e: any) => void;
  handleDeleteRoom: (e: any) => void;
  handleActiveRoom: (e: any) => void;
}

const List: FC<ListProps> = ({ activeRoom, roomData, handleCreateRoom, handleDeleteRoom, handleActiveRoom }) => {
  return(
    <React.Fragment>
      { roomData?.data?.map((el, i) => (
        <ChatList key={el._id} onClick={() => handleActiveRoom(el._id)} active={activeRoom === el._id}>
          <img src={gravatar.url(el.name, { s: '30px', d: 'wavatar' })} alt={el.name} />
          <div>{el.name}</div>
          { !el.personal && <Delete fill='white' style={{ cursor: 'pointer'}} onClick={() => handleDeleteRoom(el._id)}/>}
        </ChatList>
      ))}
      <ChatList onClick={handleCreateRoom} active={false}>
        <span>+</span>
        <div>Create New Room</div>
      </ChatList>
    </React.Fragment>
  )
}

export default List;