import Header from "../components/common/Header";
import Head from "next/head";
import Footer from "../components/common/Footer";

export default function Credits() {
  return (
    <>
      <Head>
        <title>Credits</title>
      </Head>
      <Header />
      <main>
        <h1>Credits</h1>
        <ul>
          <li>
            giammarco-boscaro-zeH-ljawHtg-unsplash.jpg<br />
            <cite>
              Boscaro, G. (2017, September 17). Photo by Giammarco Boscaro on unsplash. Beautiful Free Images &amp; Pictures. Retrieved April 9, 2023, from https://unsplash.com/photos/zeH-ljawHtg 
            </cite>
          </li>
          <li>
            ORM<br />
            <cite>
            Sequelize. Feature-rich ORM for modern TypeScript &amp; JavaScript. (n.d.). Retrieved April 9, 2023, from https://sequelize.org/ 
            </cite>
          </li>
          <li>
            NextJS Framework<br />
            <cite>
            Next.js by vercel - the REACT framework for the web. by Vercel - The React Framework for the Web. (n.d.). Retrieved April 9, 2023, from https://nextjs.org/ 
            </cite>
          </li>
          <li>
            AWSD Buttons Image<br />
            Wikimedia Comons, from https://commons.wikimedia.org/wiki/File:Cursor_keys--WASD.svg
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}