import { useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

const backURL = 'http://localhost:5050';

const socket: { [key: string]: Socket } = {}

const useSocket = (roomId: string): [Socket | undefined, () => void] => {
  console.log('socket render ', roomId)

  const disconnect = useCallback(() => {
    if (roomId) {
      socket[roomId].disconnect();
      delete socket[roomId];
    }
  },[roomId]);

  if (!roomId) {
    return [undefined, disconnect];
  }
  
  if (!socket[roomId]) {
    socket[roomId] = io(backURL, {
      transports: ['websocket'],
      query: { roomId }
    })
  }

  return [socket[roomId], disconnect];
};

export default useSocket;

