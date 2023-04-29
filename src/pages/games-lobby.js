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
        <ul style={styles.gamesList}>
          {
            games.length < 1 ? null : 
            games.map(({id, name, host}, index) => 
              <li key={index} style={styles.game}>
                <Link href={`/game/${id}`} style={styles.gameLink}>
                  {name} 
                  <div style={styles.gameHost}>Host: [{host}]</div>
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

const styles = {
  gamesList: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  game: {
    width: "250px",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#415a77",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: 20
  },
  gameLink: {
    padding: "20px",
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },  gameHost: {
    fontSize: 12
  }
}