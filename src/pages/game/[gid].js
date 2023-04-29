import { getServerSession } from "next-auth";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useRef, useState } from "react";
import Game3D from "../../components/pages/game/index.js";

// use context to be able to capture the fetched questions in the Frames 
// component without having to pass the questions down on each parent-child
// relationship until the Frames component is called.
export const GameContext = createContext();

// Front end Component
export default function Game() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);

  // The following 2 references are used to maintain a count of all quesitons
  // used to print the number of remaining questions at the lower bar menu.
  // 
  // The use of the ref hook instead of a useState component is to prevent
  // the re-rendering of the child 3-js Game component each time a question
  // is answered.
  const answerCountSpan = useRef(null);
  let listOfQuestionIDs = useRef([]);

  const gid = router.query.gid;

  useEffect(() => {
    fetch(`/api/games/random-questions/${gid}`)
      .then(res => res.json())
      .then(res => {
        setQuestions(res);
      })
      .catch(err => console.error(err));

    // Vanilla JS custom Event to update this component's UI without
    // the use of ReactJS
    document.addEventListener("answered", updateAnsweredCount);
    
    return () => {
      // Remove the Event from the DOM to avoid a memory leak
      document.removeEventListener("answered", updateAnsweredCount);
    }

  }, [gid])


  // This use effect waits for the questions to finish fetching so that
  // it can then load the questions id's on the listOfQuestions reference
  // component. 
  // [see `listOfQuestions` comment for further explanation]
  useEffect(() => {
    for (let question of questions) {
      // Due to a possible double rendering done by next js
      // seen in React's strict mode, it is necessary to check that the
      // question id is not in the array already to prevent double counting
      // the questions.
      const index = listOfQuestionIDs.current.findIndex((q) => {
        return q.id == question.id;
      })
      if (index < 0) {
        listOfQuestionIDs.current.push(question);
      }
    }

    // Vanilla JS method to imperatively update the count of unanswered questions
    answerCountSpan.current.textContent = listOfQuestionIDs.current.length;
  }, [questions])


  // Vanilla JS method used in the event listener to imperatively update
  // the unanswered questions presented to the user.
  function updateAnsweredCount(e) {
    const quesitonID = e.detail.question;
    const index = listOfQuestionIDs.current.findIndex((question) => {
      return question.id == quesitonID;
    })

    if (index < 0) {
      return;
    }

    listOfQuestionIDs.current.splice(index, 1);
    answerCountSpan.current.textContent = listOfQuestionIDs.current.length;
  }

  return (
    <form action=""
      style={{
        width: '100vw',
        height: '100svh',
        display: 'flex',
        flexDirection: 'column',
      }}
      method="post">
      <div style={{
        flexBasis: 0,
        flexGrow: '1'
      }}>
        {questions.length > 0 &&
          <GameContext.Provider value={{
            questions: questions
          }}>
            <Game3D />
          </GameContext.Provider>
        }
      </div>
      <div style={{
        padding: '20px',
        height: '100px',
        background: '#000',
        display: 'flex',
        zIndex: '100',
        color: '#fff'
      }}>
        Keep searching! There are still: 
        <span ref={answerCountSpan}></span> 
        questions unanswered.
        <button type="submit">Send Answers</button>
      </div>
    </form>
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