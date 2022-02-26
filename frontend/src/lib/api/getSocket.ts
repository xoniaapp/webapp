import socketIOClient from 'socket.io-client';

export const getSocket = () =>
  socketIOClient(`${process.env.REACT_APP_API!}/ws`, {
    transports: ['websocket'],
    upgrade: false,
  });

let socket: SocketIOClient.Socket | null = null;
export const getSameSocket = () => {
  if (!socket) {
    console.log("%cConnected to Websocket","color:green; font-size:15px")
    socket = socketIOClient(`${process.env.REACT_APP_API!}/ws`, {
      transports: ['websocket'],
      upgrade: false,
    });
  }

  return socket;
};
