import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";

export default function CreateGame() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/games/create', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({name: event.target.name.value})
      }).then((response) => response.json())
        .then((response) => {
          router.push(`/host/edit-game/${response.gameId}`, undefined, { shallow: true })
        })

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Create Game</h1>
      <form action="/api/create-game"
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
          required
        />
        <Button
          type="submit"
          variant="outlined"
        >Create Game</Button>
      </form>
    </>
  );
}