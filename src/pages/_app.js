import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: {session, ...pageProps} }) {
  console.log('this is _app');
  return <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
}
