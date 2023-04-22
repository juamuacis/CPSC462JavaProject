import { getServerSession } from "next-auth";
import { Game, GameQuestion, GameQuestionAnswer } from "../../../models/Game";



export default async function createGameHandler (req, res) {
  const session = await getServerSession(req, res);

  if (!session) {
    res.send({
      error: "Error"
    })
    return;
  }

  const { gid, includePlayers } = req.query;
  const body = req.body;

  let gameId = 0;

  if (gid !== undefined) {
    gameId = gid;
  } else if (req.body.gameId !== undefined) {
    gameId = body.gameId;
  } else {
    throw new Error("");
  }

  try {
    const game = await Game.findByPk(gameId)

    if (game === null) {
      res.status(404).json({})
      return;
    }

    const questions = await GameQuestion.findAll({
      where: {
        gameId: game.dataValues.id
      }
    })

    for (const q in questions) {
      const answers = await GameQuestionAnswer.findAll({
        where: {
          gameQuestionId  : questions[q].id,
        }
      });
      questions[q].dataValues.answers = answers;
    }
    
    const response = {
      game,
      questions: [...questions]
    }

    res.status(200).json(response)

  } catch (error) {
    console.error(error)
    res.status(500);
  }
}