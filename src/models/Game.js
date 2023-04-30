import User from "./User";

const { default: sequelize } = require("../services/Sequelize");
const { DataTypes } = require("sequelize");

export const Game = sequelize.define("game", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  }, 
  name: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.UUID
  }
});

export const GameQuestion = sequelize.define("game_question", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  question: {
    type: DataTypes.TEXT,
  },
  image: {
    type: DataTypes.STRING,
  },
});

export const GameQuestionAnswer = sequelize.define("game_question_answer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  answerText: {
    type: DataTypes.TEXT,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN
  }
});

Game.belongsTo(User);

Game.hasMany(GameQuestion)
GameQuestion.belongsTo(Game);
GameQuestion.hasMany(GameQuestionAnswer);
GameQuestionAnswer.belongsTo(GameQuestion);

// Game.sync({ force: true});
// GameQuestion.sync({ force: true});
// GameQuestionAnswer.sync({ force: true});