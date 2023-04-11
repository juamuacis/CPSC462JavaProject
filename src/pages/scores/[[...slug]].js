import Link from "next/link";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { useRouter } from "next/router";
import CreateGame from "../../components/pages/host/CreateGame";
import Dashboard from "../../components/pages/host/Dashboard";
import EditGame from "../../components/pages/host/EditGame";
import Header from "../../components/common/Header";
import { Button } from "@mui/material";
import AllScores from "../../components/pages/scores/AllScores";

export default function Host() {
  const router = useRouter();

  const [hostPage, gameId] = router.query.slug ?? ['all'];

  console.log(hostPage);

  return (
    <>
      <Head>
        <title>Scores</title>
      </Head>
      <Header />
      <main className="with-aside">
        <aside>
          <Link href="/" passHref>
            <Button variant="outlined"
              color="secondary">Back to Main</Button>
          </Link>
          <ul>
            <li>
              <Link
                href="/scores/all"
                >All Scores</Link>
            </li>
            <li>
              <Link
                href="/scores/mine"
                >My Played Scores</Link>
            </li>
            <li>
              <Link
                href="/scores/my-games"
                >My Hosted Scores</Link>
            </li>
          </ul>
        </aside>
        <div className="content-wrapper">
          {
            hostPage === 'all'   ? <AllScores /> : null
          }
        </div>
      </main>
    </>
  );
}

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
    props: {
      name: user.name
    }
  }
}