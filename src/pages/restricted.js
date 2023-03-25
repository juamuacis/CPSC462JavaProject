import { getServerSession } from "next-auth"
import { authOptions } from './api/auth/[...nextauth]'


export default function Page(props) {
  
  if (typeof window !== 'undefined') return null;

  console.log("session", props);

  // if (!session) { return <div>Error</div> }

  return (
    <div>
      <h1>Protected Page</h1>
      {/* <p>Welcome {session.user.name}</p> */}
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions);

  const user = session?.user;

  if (!user) {
    return {
      redirect: {
        destination: "api/auth/signin",
        permanent: false
      }
    }
  }

  return {
    props: {
      fabian: "nino",
      user
    }
  }
}