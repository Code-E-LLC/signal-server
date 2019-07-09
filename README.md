# signal-server

Establish websocket connection from client to server

## Phase 1

Set up Express Webserver

- Expose a endpoint to establish a websocket connection
- Accept generic messages { type: string; message: object }

Client establish websocket connection to server

- Send a hardcoded message after connection is established
