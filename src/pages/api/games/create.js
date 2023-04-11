import { getServerSession } from "next-auth";
import { Game, GameQuestion, GameQuestionAnswer } from "../../../models/Game";
import User from "../../../models/User";

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
      name    : body.name, 
      userId  : user.id
    })

    // create empty 5 questions with 5 option answers each

    for (let x = 1; x <= 5; x++) {
      const question = await GameQuestion.create({
        question  : `${body.name} question ${x}`,
        gameId    : game.id
      })

      for (let y = 1; y <= 5; y++) {
        await GameQuestionAnswer.create({
          answerText      : `Answer Option ${y}`,
          isCorrect       : false,
          gameQuestionId  : question.id
        })
      }
    }

    res.status(200).json({gameId: game.id})

  } catch (error) {
    console.error(error)
    res.status(500);
  }
}