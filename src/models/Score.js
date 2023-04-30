const { default: sequelize } = require("../services/Sequelize");
const { DataTypes } = require("sequelize");

const Score = sequelize.define('scores', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  gameId: {
    type: DataTypes.INTEGER
  },
  userId: {
    type: DataTypes.CHAR
  },
  score: {
    type: DataTypes.INTEGER
  }
});

// Score.sync({force: true});

export default Score;
