import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatScreen = ({ socket, playerName }) => {
  
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);
  const router = useRouter();
  
  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  // Scrolling to the end of the message box
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ----------------------------------------------------
  // HANDLING INVITATION
  // ----------------------------------------------------
  
  // Receiving invitation from other player
  socket.on("invitation", (data) => {
    const response = window.confirm(`🔥🔥You've received an invitation to play from user ${ data.fromName }. Do you want to accept? 🤔`);
    
    // Append this playerName to the data for game use
    data.toName = playerName;
    
    if (response) {      
      // Send a message to the inviter that the invitation was accepted
      socket.emit("acceptInvitation", data);
    } else {
      // Send a message to the inviter that the invitation was declined
      socket.emit("declineInvitation", data);
    }
  });

  // Start game if accept the invitation
  socket.on("startGame", (data) => {
    alert(`Let's play 🤩`);
    router.push(`game?name=${ playerName }`);
  }) 
  
  // Show a message if reject the invitation
  socket.on("rejectInvitation", (data) => {
    alert(`${data.toName} don't wanna play 😒`);
  })

  // ----------------------------------------------------
  // END HANDLING INVITATION
  // ----------------------------------------------------

  
  return (
    <div className="chat">
      <ChatBar socket={ socket } playerName={ playerName }/>
      <div className="chat_main">
        <ChatBody 
          socket={ socket } 
          messages={ messages }
          lastMessageRef={ lastMessageRef }/>
        <ChatFooter socket={ socket } playerName={ playerName }/>
      </div>
    </div>
  );
};

export default ChatScreen;