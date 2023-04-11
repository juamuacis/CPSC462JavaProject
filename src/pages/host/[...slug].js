import Link from "next/link";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { useRouter } from "next/router";
import CreateGame from "../../components/pages/host/CreateGame";
import Dashboard from "../../components/pages/host/Dashboard";
import EditGame from "../../components/pages/host/EditGame";
import Header from "../../components/common/Header";
import { Button } from "@mui/material";

export default function Host() {
  const router = useRouter();

  const [hostPage, gameId] = router.query.slug;

  return (
    <>
      <Head>
        <title>Games Host</title>
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
                href="/host/dashboard"
                >Host Dashboard</Link>
            </li>
            <li>
              <Link
                href="/host/create-game"
                >Create Game</Link>
            </li>
          </ul>
        </aside>
        <div className="content-wrapper">
          {
            hostPage === 'dashboard'   ? <Dashboard /> : 
            hostPage === 'create-game' ? <CreateGame /> : 
            hostPage === 'edit-game' ? <EditGame gameId={gameId} /> : null
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