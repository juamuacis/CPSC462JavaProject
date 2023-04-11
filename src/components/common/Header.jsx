import Link from "next/link";
import { getCsrfToken, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function Header() {
  const {status} = useSession();
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {

    getCsrfToken().then((csrfToken_) => {
      setCsrfToken(csrfToken_);
    });
  }, []);

  return (
    <header>
      <Link
        underline="none"
        color="inherit"
        href="/"
        >
        <Image 
          src="/history-icon.png" 
          alt="" 
          width={980 / 40}
          height={992 / 40}
          style={{
            filter: "invert(1)",
          }} />
      </Link>
      <Link
        underline="none"
        color="inherit"
        href="/">
        <h1>the history game</h1>
      </Link>
      {
        status === "authenticated" ? 
        <form action="/api/auth/signout" method="POST">
          <input type="hidden" name="csrfToken" value={csrfToken} />
          <Button
            type="submit"
            variant="contained"
            >Sign Out</Button>
        </form>
        // <Link
        //   href="/api/auth/signout"
        //   >Sign Out</Link>
        :
        <Link
          href="/auth/signin"
          >Sign In</Link>
      }
    </header>
  )
}