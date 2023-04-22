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
    const allGames = await Game.findAll();

    let games = [];

    for (const game of allGames) {
      const user = await User.findByPk(game.userId);

      const gameInfo = {
        ...game.dataValues,
        host: user.name,
      };

      games.push(gameInfo)
    }

    res.status(200).json(games)

  } catch (error) {
    console.error(error)
    res.status(500);
  }
}