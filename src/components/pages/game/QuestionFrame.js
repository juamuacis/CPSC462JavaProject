import { useState } from "react";
import { GameContext } from "../../../pages/game/[gid]";

export default function QuestionFrame({ question, size }) {
    const [questionIsHidden, setQuestionIsHidden] = useState(true);

    if (questionIsHidden) {
        return (
            <button style={{
                ...styles.button,
                width: size.width,
                height: size.height,
            }}
                onClick={() => setQuestionIsHidden(false)}
            >
                <img src={question.image}
                    style={{
                        objectFit: 'cover',
                        width: size.width,
                        height: size.height,
                    }}
                    alt="" />
            </button>
        );
    }

    // Use Vanilla JS to check if any of the current question is selected
    // if there's no answer checked yet, send the custom event to update
    // the unanswered questions count
    // [see src/pages/game/[gid].js `listOfQuestions` comment for further explanation]
    function handleAswerSelect() {
        const answerEvent = new CustomEvent("answered", {
            detail: {
                question: question.id
            }
        });
        document.dispatchEvent(answerEvent)
    }

    return (
        <div
            style={{
                ...styles.questionFrame,
                width: size.width,
                height: size.height,
            }}
        >
            <div style={styles.questionWrapper}>
                <h1>{question.question}</h1>
                <div style={styles.answersWrapper}>
                    {
                        question.answers.map((answer, index) => {
                            return <label key={index}>
                                {answer.answerText}
                                <input
                                    type="radio"
                                    name={`answer[${question.id}]`}
                                    value={answer.id}
                                    onClick={handleAswerSelect}
                                />
                            </label>
                        })
                    }
                </div>
            </div>
        </div>
    );

}

const styles = {
    button: {
        background: 'none',
        border: 'none',
        display: 'block',
        background: 'transparent',
        overflow: "hidden",
    },
    questionFrame: {
        background: "url('/images/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg')",
        backgroundColor: "#000",
        backgroundSize: "cover",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionWrapper: {
        backdropFilter: 'blur(10px)',
        color: '#fff',
        padding: 30,
        minWidth: '60%',
    },
    answersWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
}
