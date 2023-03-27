import { Link } from "@mui/material";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import CreateGame from "../../components/html/CreateGame";
import Dashboard from "../../components/html/Dashboard";
import EditGame from "../../components/html/EditGame";
import Header from "../../components/html/Header";

export default function Host() {
  const router = useRouter();

  const [hostPage, gameId] = router.query.slug;

  console.log(hostPage, gameId)

  const handleAsideNavigation = (event) => {
    event.preventDefault();
    router.push(event.currentTarget.href, undefined, { shallow: true })
  }

  return (
    <>
      <Head>
        <title>Games Host</title>
      </Head>
      <Header />
      <main className="with-aside">
        <aside>
          <ul>
            <li>
              <Link
                href="/host/dashboard"
                onClick={handleAsideNavigation}
                >Dashboard</Link>
            </li>
            <li>
              <Link
                href="/host/create-game"
                onClick={handleAsideNavigation}
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