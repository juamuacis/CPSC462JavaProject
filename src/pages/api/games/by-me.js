import { getServerSession } from "next-auth";
import { Game, GameQuestion, GameQuestionAnswer } from "../../../models/Game";
import User from "../../../models/User";



export default async function listGamesHandler (req, res) {
  const session = await getServerSession(req, res);

  if (!session) {
    res.send({
      error: "Error"
    })
    return;
  }

  try {
    const user = await User.findOne({
      where: {
        email: session.user.email
      }
    })

    const games = await Game.findAll({
      where: {
        userId  : user.id
      }
    });

    res.status(200).json(games)

  } catch (error) {
    console.error(error)
    res.status(500);
  }
}