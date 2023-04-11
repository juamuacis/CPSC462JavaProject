import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";



export default function Page({session}) {

  if (typeof window !== 'undefined') return null;

  if (!session) { return <div>Error</div> }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome {session.user.name}</p>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await getServerSession(req, res, authOptions)
    }
  }
}