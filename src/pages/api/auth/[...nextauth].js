import sequelize from "@/services/Sequelize";
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import NextAuth from "next-auth/next";

sequelize.sync();

export const authOptions = {
  providers: [],
  adapter: SequelizeAdapter(sequelize)
};

export default NextAuth(authOptions)
