import { Server } from "socket.io";

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    // Socket is already running
  }
  else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    // Event listener
    io.on("connection", (socket) => {
      // Add event handler here
      
      console.log("Client connected: ", socket.id);
    })

  }
  res.status(200).json({ url: `http://${req.headers.host}` });
  res.end();
}
