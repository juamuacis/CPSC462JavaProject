import sequelize from "@/services/Sequelize";
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import { v4 as uuidv4 } from 'uuid';

// sequelize.sync();



export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from:   process.env.EMAIL_FROM
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: "Username", type: "text", placeholder: "user@example.com"
        },
        password: {
          label: "Password", type: "password"
        }
      }, 
      async authorize(credentials, req) {
        console.log(credentials);

        return { id: 1, name: 'J Smith', email: 'fabian@fnino.com', image: "" }
        const res = await fetch('/api/login-authenticate', {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json"
          }
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        
        return null;
      }
    })
  ],
  adapter: SequelizeAdapter(sequelize),
})
