import { getServerSession } from "next-auth";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import Game3D from "../../components/pages/game/index.js";

export const GameContext = createContext();

// Front end Component
export default function Game(props) {
  const router = useRouter();
  const [game, setGame] = useState({});

  const gid = router.query.gid;

  useEffect(() => {
    fetch(`/api/games/random-questions/${gid}`)
      .then(res => res.json())
      .then(res => {
        setGame(res);
      })
      .catch(err => console.error(err))
  }, [gid])

  if (Object.keys(game).length < 1) {
    return <></>;
  }

  return (
    <GameContext.Provider value={game}>
      <Game3D />
    </GameContext.Provider>
  );
}

// back end code
export async function getServerSideProps({req, res}) {
  const session = await getServerSession(req, res);

  const user = session?.user;

  if (!user) {
    return {
      redirect: {
        destination: "/landing",
        permanent:   false
      }
    }
  }

  return {
    props: {}
  }
}