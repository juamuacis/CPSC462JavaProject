import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/index.module.css';
import { useState } from 'react';
import Lobby from './lobby';
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  // Hook to navigate pages
  const [playerName, setPlayerName] = useState("");

  const router = useRouter();

  const goLobby = () => {
    console.log("goLobby")
    router.push(`lobby?name=${playerName}`);
  }

  return (
    <>
        <Head>
          <title>Legacy Legend - Welcome</title>
        </Head>
        <label className="label_name">Your name</label>
        <input
            autoComplete="off"
            className="input_name"
            value={ playerName }
            onChange={ (e) => setPlayerName(e.target.value) }
            name="player"
            type="text"
        />
        <button
            className="btn_enter_lobby"
            onClick={ goLobby }
        >
          Enter lobby
        </button>
  </>
  )
}

