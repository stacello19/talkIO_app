import React, { FC, useCallback, useEffect, useState, useRef } from 'react';
import { Chat, ChatTypeBox, SendIcon } from './styles';
import useSocket from '@components/customHooks/socket';

import axios from 'axios';


interface Props {
  roomId: string;
  token: string;
  chatRevalidate: () => void;
};

const ChatBox: FC<Props> = ({ roomId, token, chatRevalidate, children }) => {
  const [value, setValue] = useState<string>('');
  const [socket, disconnect] = useSocket(roomId);

  useEffect(() => {
    socket?.on('welcome', (data: string) => {
      alert(data);
    })
  },[socket, roomId])

  const handleKeyPress = useCallback(async(e) => {
    if (e.key === 'Enter') {
      await handleSendMsg();
    }
  },[])

  const handleChange = useCallback((e) => {
    const text = e.target.value;
    setValue(text);
  },[]);

  const handleSendMsg = useCallback(async() => {
    await axios.post(`/api/message/${roomId}`, { message: value }, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setValue('');
    chatRevalidate();
  },[value, roomId, token])

  return(
    <Chat>
      <div style={{ minHeight: 'calc(95% - 50px)', padding: '1rem' }}>
        {children}
      </div>
      <div style={{ position: 'sticky', bottom: '0px' }}>
        <SendIcon onClick={handleSendMsg}/>
        <ChatTypeBox onKeyPress={handleKeyPress} onChange={handleChange} value={value} />
      </div>
    </Chat>
  )
}

export default ChatBox;