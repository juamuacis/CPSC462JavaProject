/* 
  This is the API for websocket.
  Websocket is similar to HTTP. In HTTP, the connection 
  between the client and server are not persistent and is kinda
  similar to passing the ball between client-server. However,
  websocket is like client and server have a water pipe connecting
  each other.

  There are many way to implement websocket, 
  in this case I'm using Socket.io, which is a very popular libary
  for websocket and is very easy to use.

  socket.on("any-name", (msg) => do something) this is to listen for event
              "any-name" in socket server and execute the callback function.
  
  socket.emit("any-name", msg) this is for sending "msg" to the socket.on("any-name") listener.

  "connection", "connect", "disconnect" are the reserved keywords of socket.io
*/

import { Server } from "socket.io";

// Create a cache memory for saving username
const NodeCache = require("node-cache")
const cache = new NodeCache({ stdTTL: 20 * 60 }); // 20 mins to store the cache


const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    // Socket is already running (putting this condition check to fix a bug)
  }
  else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    // Event listener
    // Notice here "io" is for socket server, 
    // "socket" is for a particular socket in the server
    // kinda like "io" is a house, "socket" is the room in that house.
    let onlineUsers = [];

    io.on("connection", (socket) => {
      console.log(`${ socket.id } connected`);
      /* All event handlers have to be here */
      
      // ----------------------------------------------------
      // HANDLE STORAGE
      // ----------------------------------------------------
      
      // Store username to cache, listen from lobby.js page
      socket.on("cachePlayerName", (socketID, playerName) => {
        const id = JSON.stringify(socketID);
        const name = JSON.stringify(playerName);
        cache.set(id, name);
        console.log("Successfully cached");
      });

      // Retrieve username from cache
      socket.on("getPlayerName", (id, callback) => {
        console.log("Inside the getPlayerName");
        const playerName = cache.get(JSON.stringify(id));
        callback(playerName);
      });

      // ----------------------------------------------------
      // HANDLE CHAT
      // ----------------------------------------------------

      // Handle the chat message sent from ChatFooter.js
      socket.on("message", (data) => {
        const playerName = cache.get(JSON.stringify(socket.id));
        io.emit("messageResponse", data); // Broadcast to the whole socket.io server, listen in the ChatBody.js
        console.log(`${ playerName } send a message`);
      });
      
      // ----------------------------------------------------
      // HANDLE INVITATION
      // ----------------------------------------------------
      
      // data has a format { fromName: playerName, fromID: socket.id, toID: otherID }
      
      // Handle invitation sent from ChatBar.js
      socket.on("inviteUser", (data) => {
        if (data) {
          // Click on your own name
          if (data.fromID === data.toID){
            io.to(data.fromID).emit("startGame", data);
          }
          else {
            // Send the invitation to the invitee
            socket.to(data.toID).emit("invitation", data); // listen in the ChatScreen.js
          }
        }
      });

      // Start game when accept the invitation, data now has toName indicate name of the invitee
      socket.on("acceptInvitation", (data) => {
        io.to(data.fromID).emit("startGame", data);
        io.to(data.toID).emit("startGame", data); 
      });

      // Decline the invitation
      socket.on("declineInvitation", (data) => {
        socket.to(data.fromID).emit("rejectInvitation", data); // listen in the ChatScreen.js
      });
      
      // ----------------------------------------------------
      // HANDLE CONNECTION
      // ----------------------------------------------------
      
      // Handle newUser connecting, listen from lobby.js page
      socket.on("newUser", (data) => {
        onlineUsers.push(data);
        // Send the updated array of online users to all clients
        io.emit("updateUsers", onlineUsers); // listen in the ChatBar.js
      });
      
      // Handle disconnecting
      socket.on("disconnect", () => {
        console.log(`${cache.get(JSON.stringify(socket.id))} disconnected`);
        onlineUsers = onlineUsers.filter((user) => user.id !== socket.id);
        cache.del(JSON.stringify(socket.id)); // Delete user data in cache
        // Send the updated array of online users to all clients
        io.emit("updateUsers", onlineUsers); // listen in the ChatBar.js
        socket.disconnect();
      });

      
      // For testing purpose
      socket.on("test", (id) => {
        console.log(`${id} send a message`);
        socket.emit("receive", id);
      });
      
    });

  }
  res.status(200).json({ url: `http://${req.headers.host}` });
  res.end();
}

export default SocketHandler;