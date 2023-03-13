import { useEffect, useState } from "react";

const ChatBar = ({ socket, playerName }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  
  const handleInvite = (event) => {
    const otherID = event.target.dataset.id;
    const data = { fromName: playerName, fromID: socket.id, toID: otherID };
    console.log("Data is ", data);
    socket.emit("inviteUser", data);
  };
  
  useEffect(() => {
    socket.on("updateUsers", (data) => setOnlineUsers(data));
  }, [socket, onlineUsers]);
   
  return (
    <div className="chat__sidebar">
      <h2>Lobby</h2>
      <h5>To invite someone to play, click on any name.</h5>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {
            onlineUsers.map((user) => (
              <p key={ user.id } 
                 data-id={ user.id } 
                 onClick={ handleInvite }>
                    { user.name }
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ChatBar;