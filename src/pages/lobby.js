import Head from "next/head"
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ChatScreen from "../components/chat/ChatScreen";


const Lobby = () => {
  const router = useRouter(); // Special Next.js hook to access the url path.

  // Get the playerName from the url query. This is asynchronuous, 
  // the 1st render will be undefined.
  const playerName = router.query.playerName; 

  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    socketInitializer(playerName);
  }, [playerName]);

  
  // Starting the socket server  
  const socketInitializer = async (playerName) => {
    try {      
      // playerName in 1st render will be undefined
      if (playerName) {
        // Send the username to the server to cache
        // New Next.js 13 feature, they override the fetch
        // function and make it also works with backend server
        const response = await fetch("/api/socket"); 
        const data = await response.json();
        const newSocket = io(data.url);
        setLoading(false);
        setSocket(newSocket);
        
        // Check for server connection
        newSocket.on("connect", () => {
          console.log(`Conneted with Username:${ playerName } and ID:${newSocket.id}`);
          
          // Update newUser array in the chat bar
          newSocket.emit("newUser", { name: playerName, id: newSocket.id });
          
          // Cache the playerName
          newSocket.emit("cachePlayerName", newSocket.id, playerName);
        });
  
      }
      
    } catch (error) {
      console.error("There was an error:", error);
    }
  }  

  // Loading is to fix an async bug
  if (loading) {
    return <p>Loading...</p>;
  } 
  else {
    return (
      <>
        <Head>
          <title>Lobby</title>
        </Head>
        <ChatScreen socket={ socket } playerName={ playerName }/>
      </>
    );
  }
}

export default Lobby;