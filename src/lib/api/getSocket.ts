import ReconnectingWebSocket from "reconnecting-websocket";

export const getSocket = (): ReconnectingWebSocket =>
  new ReconnectingWebSocket(process.env.REACT_APP_WS!);

let socket: ReconnectingWebSocket | null = null;
export const getSameSocket = (): ReconnectingWebSocket => {
  if (!socket) {
    console.log("%c[WS] Connected to WebSocket", "color:blue; font-size:10px");
    socket = new ReconnectingWebSocket(process.env.REACT_APP_WS!);
  }

  return socket;
};
