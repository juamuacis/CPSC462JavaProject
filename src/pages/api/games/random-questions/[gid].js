import { getServerSession } from "next-auth";
import { Game, GameQuestion, GameQuestionAnswer } from "../../../../models/Game";

export default async function randomQuestions (req, res) {
  const session = await getServerSession(req, res);

  if (!session) {
    res.send({
      error: "Error"
    });
    return ;
  }

  const { gid } = req.query;

  try {
    const game = await Game.findByPk(gid);

    if (game === null) {
      res.status(404).json({})
      return;
    }

    let questions = [];

    const questions_ = await GameQuestion.findAll({
      attributes: ['id', 'question', 'image'],
      where: {
        gameId: game.dataValues.id
      }
    })

    for (const q in questions_) {
      const answers = await GameQuestionAnswer.findAll({
        attributes: ['id', 'answerText'],
        where: {
          gameQuestionId  : questions_[q].id,
        }
      });
      
      const randomizedAnswers = answers.sort((a, b) => 0.5 - Math.random());

      questions.push({
        ...questions_[q].dataValues,
        answers: randomizedAnswers,
      })
    }

    const randomQuestions = questions.sort((a, b) => 0.5 - Math.random());

    res.status(200).json(randomQuestions);

  } catch (error) {
    console.error(error);

    res.status(500);
  }
}