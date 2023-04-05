import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function EditGame({gameId}) {
  const [game, setGame] = useState({});

  useEffect(() => {
    fetch('/api/game', {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({gameId})
    }).then((response) => response.json())
      .then((response) => {
        setGame(response);
      })
  }, [gameId])

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/edit-game', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({name: event.target.name.value})
      })

    } catch (error) {
      console.error(error);
    }
  }

  if (Object.keys(game).length < 1) {
    return <></>
  }

  return (
    <>
      <h1>Edit {game.name}</h1>
      <form action="/api/edit-game"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10
        }}
        method="post"
        onSubmit={handleSubmit}>
        <TextField
          label="Game Name"
          name="name"
          id="name"
          value={game.name}
          required
        />
        <Button
          type="submit"
          variant="outlined"
        >Edit</Button>
      </form>
    </>
  );
}