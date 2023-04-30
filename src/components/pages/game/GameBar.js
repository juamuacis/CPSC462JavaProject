import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import GameInstructions from "./GameInstructions";

export default function GameBar({ questions }) {
    const [showInstructions, setShowInstructions] = useState(false);

    // The following 2 references are used to maintain a count of all quesitons
    // used to print the number of remaining questions at the lower bar menu.
    // 
    // The use of the ref hook instead of a useState component is to prevent
    // the re-rendering of the child 3-js Game component each time a question
    // is answered.
    const answerCountSpan = useRef(null);
    let listOfQuestionIDs = useRef([]);


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

        // Vanilla JS custom Event to update this component's UI without
        // the use of ReactJS
        document.addEventListener("answered", updateAnsweredCount);
        
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape") {
                setShowInstructions(false);
            }
        })

        return () => {
            // Remove the Event from the DOM to avoid a memory leak
            document.removeEventListener("answered", updateAnsweredCount);
            
            document.removeEventListener('keydown', (e) => {
                if (e.code === "Escape") {
                    setShowInstructions(false);
                }
            })
        }
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
        <>
            <div style={{
                padding: '20px',
                height: '100px',
                background: '#000',
                display: 'flex',
                zIndex: '100',
                color: '#fff',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    gap: 5
                }}>
                    <Link href="/games-lobby" style={{
                        border: 'none',
                        borderRadius: 5,
                        backgroundColor: 'red',
                        padding: 10,
                        lineHeight: '1em',
                    }}>
                        Exit
                    </Link>
                    <button type="button"
                        style={{
                            border: 'none',
                            borderRadius: 5,
                            backgroundColor: '#888',
                            padding: 10,
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '.8em',
                        }}
                        onClick={() => {
                            setShowInstructions(prev => !prev);
                        }}
                    >Instructions</button>
                </div>
                <div>
                    Keep searching! There are still:&nbsp;
                    <span ref={answerCountSpan}></span>&nbsp;
                    questions to go!
                </div>
                <button type="submit"
                    style={{
                        border: 'none',
                        borderRadius: 5,
                        backgroundColor: 'green',
                        padding: 10,
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >Send Answers</button>
            </div>
            {
                showInstructions &&
                <GameInstructions />
            }
        </>
    );
}
