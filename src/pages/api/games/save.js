import { getServerSession } from "next-auth";
import { Game, GameQuestion, GameQuestionAnswer } from "../../../models/Game";

export default async function saveGameHandler (req, res) {
  const session = await getServerSession(req, res);

  if (!session) {
    res.send({
      error: "Error"
    })
    return;
  }

  const body = req.body;

  try {
    // Save game information
    await Game.update({
      name: body.game.name
    }, {
      where: {
        id: body.game.id
      }
    })

    // Save questions information

    body.questions.map(async (question) => {
      await GameQuestion.update({
        question: question.question
      }, {
        where: {
          id: question.id
        }
      })

      // Save answers information

      question.answers.map(async (answer) => {
        await GameQuestionAnswer.update({
          answerText: answer.answerText,
          isCorrect : answer.isCorrect
        }, {
          where: {
            id: answer.id
          }
        })
      })
    })

    res.status(200).json([])

  } catch (error) {
    console.error(error);
    res.status(500)
  }
}