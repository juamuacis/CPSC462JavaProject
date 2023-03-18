const { default: sequelize } = require("@/services/Sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

User.sync({ force: true});

export default User;