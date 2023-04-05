import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/html/Header'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>The History Game</title>
      </Head>
      <Header />
      <main className={styles.main} style={{
        backgroundImage: `url('images/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg')`
      }}>
        <div className={styles.content}>
          <h1>The History Game</h1>
          <Link href="/auth/signin" className={styles.buttonLink}>Enter</Link>
        </div>
      </main>
    </>
  )
}
