import { Html } from "@react-three/drei";
import { useContext } from "react";
import { GameContext } from "../../../pages/game/[gid]";
import QuestionFrame from "./QuestionFrame";

export default function Frames() {
    const {questions} = useContext(GameContext);

    // List of available frames onto which questions may be painted on
    let frames = [
        {
            position: [ 1.88, 2.18, 6.98 ],
            rotation: {
                y: -(Math.PI * 0.5),
                z: 0,
            },
            size: {
                width: 1320,
                height: 780,
            }
        },
        {
            position: [ 1.89, 2, 13.445 ],
            rotation: {
                y: -(Math.PI * 0.5),
                z: 0,
            },
            size: {
                width: 852,
                height: 620,
            }
        },
        {
            position: [ -0.77, 1.828, 15.94 ],
            rotation: {
                y: (Math.PI * 1),
                z: 0,
            },
            size: {
                width: 548,
                height: 512,
            }
        },
        {
            position: [ -1.96, 1.88, 9.92 ],
            rotation: {
                y: (Math.PI * 0.5),
                z: 0
            },
            size: {
                width: 586,
                height: 540,
            }
        },
        {
            position: [-1.96, 2.10, 7.59 ],
            rotation: {
                y: (Math.PI * 0.5),
                z: 0
            },
            size: {
                width: 739,
                height: 720,
            }
        },
        {
            position: [ -1.96, 1.73, 5.435 ],
            rotation: {
                y: (Math.PI * 0.5),
                z: 0
            },
            size: {
                width: 430,
                height: 430,
            }
        },
        {
            position: [ -1.96, 1.73, 5.435 ],
            rotation: {
                y: (Math.PI * 0.5),
                z: 0
            },
            size: {
                width: 430,
                height: 430,
            }
        },
        {
            position: [-1.96, 1.78, 3.46],
            rotation: {
                y: (Math.PI * 0.5),
                z: 0
            },
            size: {
                width: 477,
                height: 477,
            }
        },
        {
            position: [ -1.96, 1.78, -3.462 ],
            rotation: {
                y: (Math.PI * 0.5),
                z: 0
            },
            size: {
                width: 477,
                height: 477,
            }
        },
        {
            position: [ -1.96, 1.74, -5.43 ],
            rotation: {
                y: (Math.PI * 0.5),
                z: 0
            },
            size: {
                width: 420,
                height: 420,
            }
        },
        {
            position: [ -1.96, 2.12, -7.59 ],
            rotation: {
                y: (Math.PI * 0.5),
                z: 0
            },
            size: {
                width: 720,
                height: 700,
            }
        },
    ];

    return (
        <>
            {questions.map((question, index) => {
                // Randomly select a frame to paint this question
                // and remove said frame from the avaliable list of frames.
                const frame_ = frames.splice(
                    Math.floor(Math.random() * frames.length), 1
                )[0];
                return <Html
                    key={index}
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={ 1 }
                    position={ frame_.position }
                    rotation-y={ frame_.rotation.y }
                    rotation-z={ frame_.rotation.z }
                >
                    <QuestionFrame 
                        question={question} 
                        size={frame_.size}
                    />
                </Html>
            })}
        </>
    );
}