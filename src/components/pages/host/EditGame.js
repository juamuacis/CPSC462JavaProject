import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Question from "./Question";
import Link from "next/link";

export default function EditGame({gameId}) {
  const [game, setGame] = useState({});
  const [questions, setQuestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/games/${gameId}`, {
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((response) => {
        console.log(response);
        setGame({...response.game});
        setQuestions(response.questions);
      })
  }, [gameId])

  const handleSaveQuestions = async (e) => {
    e.preventDefault();
    console.log({game, questions});
    try {
      const response = await fetch('/api/games/save', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({game, questions})
      });

      console.log("saved")
      router.push('/host/dashboard', undefined, { shallow: true })

    } catch (error) {
      console.error(error);
    }
  }

  if (Object.keys(game).length < 1) {
    return <></>
  }

  // console.log({questions});

  return (
    <>
      <h1>Edit {game.name}</h1>
      <form action="" method="post"
        onSubmit={handleSaveQuestions}
      >
        <div style={{
          display: "flex",
          paddingTop: 20,
          paddingBottom: 20,
          marginBottom: 20,
          gap: 10,
          justifyContent: "end",
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 100
        }}>
          <Link href="/host/dashboard" passHref>
            <Button 
              variant="outlined"
              color="secondary">Cancel</Button>
          </Link>
          <Button 
            type="submit"
            variant="outlined"
          >Save Game</Button>
        </div>

        <TextField
          label="Game Name"
          name="name"
          id="name"
          value={game.name}
          onChange={(e) => setGame({
            ...game,
            name: e.currentTarget.value
          })}
          required
        />
        <h1>Questions</h1>
        {
          questions.map((question, index) => {
            return <Question 
              key             = {index}
              questionIndex   = {index}
              question        = {question}
              setQuestions    = {setQuestions}
              />
          })
        }
      </form>

    </>
  );
}