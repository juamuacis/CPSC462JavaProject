import User from "../../../models/User";
import PasswordManager from "../../../services/PasswordManager";
import sequelize from "../../../services/Sequelize";
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const passwordManager = new PasswordManager();

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: 'web',
      name: 'web',
      credentials: {
        username: {
          label: "Username", type: "text", placeholder: "user@example.com"
        },
        password: {
          label: "Password", type: "password"
        }
      }, 
      async authorize(credentials, req) {
        console.log("credentials", credentials);

        const user = await User.findOne({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          throw new Error("Wrong crednetials. Try again.");
        }

        const verifyPassword = await passwordManager.compare(credentials.password, user.password);
        
        if (!verifyPassword) {
          throw new Error("Wrong crednetials. Try again.");
        }

        return {
          name: user.name,
          email: user.email
        }
      }
    })
  ],
  adapter: SequelizeAdapter(sequelize),
  // callbacks: {
  //   session: async (sessionProps) => {
  //     const {session, user, token} = sessionProps;

  //     console.log("session nextAuth user", sessionProps);

  //     if (session?.user) {
  //       session.user.id = token.uid;
  //     }
  //     // console.log("session nextAuth", session);
  //     return session;
  //   },
  //   jwt: async ({user, token, profile}) => {
  //     // console.log("user nextAuth", token, profile);
  //     if (profile) {
  //       token.uid = profile.id;
  //     }
  //     return token;
  //   }
  // }
})
