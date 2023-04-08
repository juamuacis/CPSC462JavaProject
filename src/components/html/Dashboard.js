import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [games, setGames] = useState([]);


  useEffect(() => {
    fetch('/api/games', {
      method: "POST",
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
      <h1>Dashboard</h1>
      <h2>My Games</h2>
      <List>
        {
          games.map((game, index) => {
            return (
              <ListItemButton key={index} 
                component="a" href={`/host/edit-game/${game.id}`}>
                <ListItemText>{game.name}</ListItemText>
              </ListItemButton>
            )
          })
        }
      </List>
    </>
  )
}