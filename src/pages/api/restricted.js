import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth].js"


export default async function handler (req, res) {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (session) {
    res.send({
      content: "This is protected content"
    })
  } else {
    res.send({
      error: "You must be signed in to view"
    })
  }
}
