const { default: sequelize } = require("../services/Sequelize");
const { DataTypes } = require("sequelize");
const { default: GameQuestion } = require("./GameQuestion");

const GameQuestionAnswer = sequelize.define("game_question_answer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  answerText: {
    type: DataTypes.TEXT,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN
  }
})

GameQuestionAnswer.belongsTo(GameQuestion);

// GameQuestionAnswer.sync({ force: true});

export default GameQuestionAnswer;
