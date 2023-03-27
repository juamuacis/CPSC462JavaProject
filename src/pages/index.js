import Head from 'next/head'
import Header from '../components/html/Header';
import styles from '../styles/Home.module.css';
import { getServerSession } from 'next-auth';
import { Link } from '@mui/material';

export default function Home({name}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <main>
        <h1>Welcome {name}</h1>
        <h2>What do you want to do?</h2>
        <div className={styles.homeOptions}>
          <div className={styles.homeOption}>
            <Link
              href="/lobby"
            >Play a Game</Link>
          </div>
          <div className={styles.homeOption}>
            <Link
              href="/host/dashboard"
            >Host a Game</Link>
          </div>
          <div className={styles.homeOption}>
            <Link
              href="/"
            >See All Scores</Link>
          </div>
        </div>
      </main>
    </>
  )
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