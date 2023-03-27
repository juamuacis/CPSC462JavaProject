import { Alert, Button, TextField } from "@mui/material";
import Head from "next/head";
import Header from "../../components/html/Header";
import styles from "../../styles/CreateAccount.module.css"
import { getCsrfToken } from "next-auth/react";
import { useState } from "react";
import { getServerSession } from "next-auth";

export default function CreateAccount({csrfToken}) {
  const [emailError, setEmailError]     = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name:     event.target.name.value,
      email:    event.target.email.value,
      password: event.target.password.value,
    }

    try {
      const response = await fetch('/api/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const status = response.status;
      const result = await response.json();

      if(status !== 200) {
        if (result.error === "not_unique_email") {
          setEmailError(true);
        }
        throw new Error(result.message)
      }

      // Make an ajax request to automatically sign in the user
      // Then, redirect the user to the home page after user is 
      // successfully signed in.
      const signinInfoPayload = {
        username: payload.email,
        password: payload.password,
        csrfToken
      }

      const loginResponse = await fetch(`/api/auth/callback/web`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signinInfoPayload)
      });

      // Redirect to post-login redirects
      window.location = loginResponse.url;
  
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  return (
    <>
      <Head>
        <title>Create and account</title>
      </Head>
      <Header />
      <main>
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}
          method="post"
          className={styles.formContainer}>
          {
            errorMessage.length > 0 ?
            (
              <Alert severity="error">
                {errorMessage}
              </Alert>
            ) : null
          }
          <TextField
            label="name"
            name="name"
            id="name"
            autoCapitalize="yes"
            autoComplete="given-name"
            required
          ></TextField>
          <TextField
            label="email"
            name="email"
            id="email"
            type="email"
            error={emailError}
            focused={emailError}
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
          >Sign Up</Button>
        </form>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res);

  const user = session?.user;

  if (user) {
    return {
      redirect: {
        destination: "/",
        permanent: false
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
