import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "./EditGameComponents/Question";

export default function EditGame({gameId}) {
  const [game, setGame] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/api/game', {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({gameId})
    }).then((response) => response.json())
      .then((response) => {
        console.log(response);
        setGame({...response.game});
        setQuestions(response.questions);
      })
  }, [gameId])

  const handleSaveQuestions = async () => {
    console.log({game, questions});
    try {
      const response = await fetch('/api/save-game', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({game, questions})
      }).then((response) => response.json())
        .then((response) => {
          console.log("saved")
        })

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
      <h1>Edit {game.name}
        <Button 
          type="button"
          variant="outlined"
          onClick={handleSaveQuestions}
        >Save Game</Button>
      </h1>

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
    </>
  );
}