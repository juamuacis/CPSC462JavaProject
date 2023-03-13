import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Lobby from './lobby';
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] });

const Index = () => {
  // Hook to navigate pages
  const [playerName, setPlayerName] = useState("");

  const router = useRouter();

  const goLobby = () => {
    console.log("goLobby")
    
    router.push(`lobby?playerName=${ playerName }`); // navigate to lobby page without trigger reload
  }

  return (
    <>
        <Head>
          <title>Legacy Legend - Welcome</title>
        </Head>
        <form className="home__container" onSubmit={ goLobby }>
          <h2 className="home__header">Choose a username</h2>
          <label htmlFor="username">Username</label>
          <input
                type="text"
                minLength={1}
                name="username"
                id="username"
                className="username__input"
                value={ playerName }
                onChange={(e) => setPlayerName(e.target.value)}
          />
          <button className="home__cta">Enter the lobby</button>
        </form>
  </>
  )
}

export default Index;