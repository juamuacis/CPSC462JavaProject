import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/html/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>The History Game</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>The History Game</h1>

      </main>
    </>
  )
}
