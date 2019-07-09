import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8000 });

wss.on("connection", ws => {
  ws.on("message", message => {
    console.log("received: %s", message);
  });

  setInterval(() => {
    ws.send(`${new Date()}`);
    console.log("push");
  }, 1000);
});
