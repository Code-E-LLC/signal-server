import WebSocket from "ws";
import { writeToFile } from "./adapters/storage";

import chalk from "chalk";

const wss = new WebSocket.Server({ port: 8000 });

/**
 * Websocket object doesn't include isAlive by default
 */
type WebSocketA = WebSocket & { isAlive: boolean };

/**
 * No operation: Does nothing
 */
const noop = () => {};

/**
 * On new client connected
 */
wss.on("connection", (ws: WebSocketA) => {
  ws.on("message", async message => {
    console.log("received: %s", message);
    const stats = await writeToFile("message", message);
    chalk.green(JSON.stringify(stats));
    ws.send(`Server got: ${message}`);
  });
});

/**
 * Remove old socket connections every so often
 */
const cleanInterval = setInterval(() => {
  wss.clients.forEach((ws: WebSocketA) => {
    if (ws.isAlive === false) {
      return ws.terminate();
    }

    ws.isAlive = false;
    ws.ping(noop);
  });
}, 30000);
