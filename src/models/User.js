const { default: sequelize } = require("../services/Sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define('users', {
  id: {
    type: DataTypes.CHAR,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    // allowNull: false
  }, 
  email: {
    type: DataTypes.STRING,
    // allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    // allowNull: false
  },
  gameStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "offline",
  },
});

// User.sync({ force: true});

export default User;