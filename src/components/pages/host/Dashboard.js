import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [games, setGames] = useState([]);
  const router = useRouter();

  const handleNavigation = (event) => {
    event.preventDefault();
    router.push(event.currentTarget.href, undefined, { shallow: true })
  }

  useEffect(() => {
    fetch('/api/games/by-me', {
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify()
    }).then((response) => response.json())
      .then((response) => {
        console.log(response);
        setGames(response);
      })
  }, [])

  return (
    <>
      <h1>Host A Game</h1>
      <h2>My Games</h2>
      <ul>
        {
          games.map((game, index) => {
            return (
              <li key={index}>
                <Link 
                  href={`/host/edit-game/${game.id}`}
                >{game.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}