const { default: sequelize } = require("@/services/Sequelize");
const { DataTypes } = require("sequelize");


const Account = sequelize.define('Account', {
  provider: {
    type: DataTypes.STRING
  },
  providerAccountId: {
    type: DataTypes.INTEGER
  },
  userId: {
    type: DataTypes.INTEGER
  }
});

Account.sync({alter: true})

export default Account;