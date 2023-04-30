import { getServerSession } from "next-auth";
import { GameQuestionAnswer } from "../../../models/Game";
import Score from "../../../models/Score";
import User from "../../../models/User";
const { Op } = require("sequelize");

export default async function verify (req, res) {
  const session = await getServerSession(req, res);

  if (!session) {
    res.send({
      error: "Error"
    })
    return;
  }

  const {gameId, answers} = req.body;

  

  
  try {
    // process answers

    if (answers === undefined || answers.length < 1) {
      res.status(200).json({gameId, score: 0})
      return;
    }

    let answerValues = [];

    answers.forEach(({key, value}) => {
      answerValues.push(value);
    })

    const realAnswers = await GameQuestionAnswer.findAll({
      where: {
        id: {
          [Op.in]: answerValues
        },
        isCorrect: true,
      }
    })

    
    const score = realAnswers.length;

    const user = await User.findOne({
      attributes: ['id'],
      where: {
        email: session.user.email
      }
    })

    if (score > 0) {
      // store scores
      await Score.create({
        gameId,
        userId: user.id,
        score
      })
    }

    res.status(200).json({gameId, score})

  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
