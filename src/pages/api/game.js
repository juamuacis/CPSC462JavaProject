import { getServerSession } from "next-auth";
import { Game, GameQuestion, GameQuestionAnswer } from "../../models/Game";



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
    const game = await Game.findOne({
      where: {
        id: body.gameId
      }
    })

    
    if (game === null) {
      res.status(404).json({})
      return;
    }

    const questions = await GameQuestion.findAll({
      where: {
        gameId: game.id
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
    console.log(questions);
    
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