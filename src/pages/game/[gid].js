import { getServerSession } from "next-auth";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useRef, useState } from "react";
import Game3D from "../../components/pages/game/index.js";
import Link from "next/link.js";
import GameInstructions from "../../components/pages/game/GameInstructions.js";
import GameBar from "../../components/pages/game/GameBar.js";
import GameScore from "../../components/pages/game/GameScore.js";

// use context to be able to capture the fetched questions in the Frames 
// component without having to pass the questions down on each parent-child
// relationship until the Frames component is called.
export const GameContext = createContext();

const GameMemo = React.memo(Game3D, (prev, next) => {
  return true;
})

// Front end Component
export default function Game() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(-1);

  const gid = router.query.gid;

  useEffect(() => {
    fetch(`/api/games/random-questions/${gid}`)
      .then(res => res.json())
      .then(res => {
        setQuestions(res);
      })
      .catch(err => console.error(err));

  }, [gid])

  function sendGameAnswers(e) {
    e.preventDefault();

    console.log(e);

    const formData = new FormData(e.target)

    let fields = {
      gameId: gid,
      answers: []
    }; 

    for(const [key, value] of formData) {
      console.log({key, value})
      fields.answers.push({key, value})
    }

    fetch('/api/games/verify', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(fields)
    })
      .then(res => res.json())
      .then(({score}) => {
        
        console.log(score);
        setScore(score);
      })
      .catch((error) => console.error(error));
  }

  if (score > -1) {
    return (
      <div style={{
        background: "url('/images/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg')",
        backgroundSize: "cover",
        width: '100vw',
        height: '100vh',
      }}>
        <GameScore score={score} />
      </div>
    );
  }

  return (
    <>
    <form action=""
      style={{
        width: '100vw',
        height: '100svh',
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={sendGameAnswers}
      method="post">
      <div style={{
        flexBasis: 0,
        flexGrow: '1'
      }}>
        {questions.length > 0 &&
          <GameContext.Provider value={{
            questions: questions
          }}>
            <GameMemo />
          </GameContext.Provider>
        }
      </div>
      <GameBar questions={questions} />
    </form>
    </>
  );
}

// back end code
export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res);

  const user = session?.user;

  if (!user) {
    return {
      redirect: {
        destination: "/landing",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}