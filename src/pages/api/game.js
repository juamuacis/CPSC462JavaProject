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

    // const questions = await game.getQuestion();

    
    if (game === null) {
      res.status(404).json({})
      return;
    }

    res.status(200).json({...game.dataValues})


  } catch (error) {
    console.error(error)
    res.status(500);
  }
}