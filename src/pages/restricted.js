import { useSession } from "next-auth/react";
import { AccessDeniedError } from "sequelize";


export default function Page(req, res) {
  const [session, loading] = useSession();

  if (typeof window !== 'undefined' && loading) return null;

  if (!session) { return <div><AccessDeniedError/></div> }

  res.send (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome {session.user.name}</p>
    </div>
  )
}