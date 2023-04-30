import Link from "next/link";

export default function GameScore({ score }) {

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
      textAlign: 'center',
      justifyContent: 'space-between'
    }}>
      <h1>Your Score</h1>
      <h2 style={{
        fontSize: '8em',
      }}>{score}</h2>
      <Link href="/games-lobby" style={{
        border: 'none',
        borderRadius: 5,
        backgroundColor: '#7400ff',
        padding: 10,
        lineHeight: '1em',
        textAlign: 'center',
      }}>
        Exit
      </Link>
    </div>
  );
}