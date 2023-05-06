

export default function GameInstructions() {

    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: "blur(10px)",
            display: 'flex',
            padding: 20,
            borderRadius: 10,
            position: 'absolute',
            width: '60vw',
            height: '60vh',
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            flexDirection: 'column',
            overflowY: 'scroll',
        }}>
            <h1>Instructions</h1>
            <h2>Controls</h2>
            <div>
                <img src="/images/Cursor_keys--WASD.svg"
                    alt=""
                    style={{ 
                        float: "left",
                        marginRight: 40,
                    }}
                />
                <ul>
                    <li>Press W to move forward</li>
                    <li>Press A to move left</li>
                    <li>Press S to move back</li>
                    <li>Press D to move right</li>
                </ul>
                <br style={{clear: 'both'}} />
                <ul>
                    <li>Press Escape to get out of the game screen</li>
                </ul>
            </div>
            <h2>Objective</h2>
            <ul>
                <li>Find questions hidded in the room</li>
                <li>Select the correct answer</li>
                <li>Send the answers to get your score</li>
            </ul>
        </div>
    );
}