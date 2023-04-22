import Footer from "../components/common/Footer";
import { getServerSession } from "next-auth";
import Head from "next/head";
import Header from "../components/common/Header";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function GamesLobby() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/api/games', {
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((response) => {
        console.log(response)
        setGames(response);
      })
  }, [])

  return (
    <>
      <Head>
        <title>Games Lobby</title>
      </Head>
      <Header />
      <main>
        <h1>Lobby</h1>
        <ul>
          {
            games.length < 1 ? null : 
            games.map(({id, name, host}, index) => <li key={index}>
              <Link href={`/game/${id}`}>
                {name} by [{host}] players in game
              </Link>
            </li>)
          }
        </ul>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({req, res}) {
  const session = await getServerSession(req, res);

  const user = session?.user;

  if (!user) {
    return {
      redirect: {
        destination: "/landing",
        permanent:   false
      }
    }
  }

  return {
    props: {
      name: user.name,
      games: null
    }
  }
}

