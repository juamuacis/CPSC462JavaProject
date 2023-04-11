import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/common/Header'
import Link from 'next/link'
import Footer from '../components/common/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>The History Game</title>
      </Head>
      <Header />
      <main className={styles.main} style={{
        backgroundImage: `url('images/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg')`,
        margin: 0,
        height: 'calc(100svh - 56px)'
      }}>
        <div className={styles.content}>
          <h1>The History Game</h1>
          <Link href="/auth/signin" className={styles.buttonLink}>Enter</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
