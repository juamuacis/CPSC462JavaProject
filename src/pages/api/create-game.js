import { getServerSession } from "next-auth";
import { Game } from "../../models/Game";
import User from "../../models/User";

export default async function createGameHandler (req, res) {
  const session = await getServerSession(req, res);

  if (!session) {
    res.send({
      error: "Error"
    })
    return;
  }

  const body = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: session.user.email
      }
    })

    const game = await Game.create({
      name: body.name, 
      userId: user.id
    })

    res.status(200).json({gameId: game.id})

  } catch (error) {
    console.error(error)
    res.status(500);
  }
}