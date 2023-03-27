import { getServerSession } from "next-auth";
import Head from "next/head";
import Header from "../components/html/Header";

export default function Lobby() {
  return (
    <>
      <Head>
        <title>Games Lobby</title>
      </Head>
      <Header />
      <main>
        <h1>Games Lobby</h1>
        <div></div>
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