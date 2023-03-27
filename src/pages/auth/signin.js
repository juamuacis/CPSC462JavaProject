import Header from "../../components/html/Header";
import { Button, Link, TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { getCsrfToken } from "next-auth/react";
import Head from "next/head";
import styles from "../../styles/CreateAccount.module.css"


export default function SignIn({csrfToken}) {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <Header />
      <main>
        <div className={styles.dual}>
          <div className={styles.signin}>
            <h1>Sign In</h1>
            <form method="post" action="/api/auth/callback/web"
              className={styles.formContainer}>
              <input type="hidden" name="csrfToken" value={csrfToken} />
              <TextField
                label="email"
                name="email"
                id="email"
                type="email"
                autoCapitalize="yes"
                autoComplete="given-name"
                required
              ></TextField>
              <TextField
                label="password"
                name="password"
                id="password"
                type="password"
                autoCapitalize="yes"
                autoComplete="given-name"
                required
              ></TextField>
              <Button
                type="submit"
                variant="outlined"
              >Submit</Button>
            </form>
          </div>
          <div className="createaccount">
            <Link href="/auth/create-account">
              Or Create an account
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res);

  if (session) {
    return {
      redirect: {
        destination: "/"
      }
    }
  }

  const csrfToken = await getCsrfToken(context);
  return {
    props: { 
      csrfToken 
    },
  };
}