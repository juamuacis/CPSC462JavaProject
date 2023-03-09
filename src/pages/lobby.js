import styles from "../styles/lobby.module.css";
import io from "socket.io-client";
import { useEffect } from "react";
import { useRouter } from "next/router";


let socket;
export default function Lobby() {
  const router = useRouter();
  const { name } = router.query;
  
  useEffect(() => {
    socketInitializer();
    }, []);
    
  // Communicate with the socket server  
  const socketInitializer = async () => {
    await fetch("/api/socket")
      .then((response) => response.json())
      .then((data) => {
        const socket = io(data.url);
        // Event handler here
        socket.on("connect", () => {
          console.log(`Connected to server with id ${socket.id}`);
            
        })
      })
      .catch((error) => {
        console.error("There was an error:", error);
      });
  }  

  return (
  <>
    <h1>This is the lobby { name } </h1>
  </>
  )
}