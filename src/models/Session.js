const { default: sequelize } = require("@/services/Sequelize");
const { DataTypes } = require("sequelize");


const Session = sequelize.define('Session', {
  sessionToken: {
    type: DataTypes.STRING
  }
});

Session.sync({alter: true});

export default Session;