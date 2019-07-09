# signal-server

Establish websocket connection from client to server

## Phase 1

- [x] Set up Express Webserver
- [x] Expose a endpoint to establish a websocket connection
- [x] Accept generic messages { type: string; message: object } or a string... anything
- [x] Client establish websocket connection to server
- [x] Send a hardcoded message after connection is established
- [x] After connection is established user can submit arbitrary values to the websocket connection
- [x] These values should write out to a file

## Phase 2

- [ ] Create Signal server message types / topics
- [ ] Broadcast that there are new connections to all users
- [ ] Expose an api to retrieve a list of active peer nodes
- [ ] Clean out disconnected hosts from storage
