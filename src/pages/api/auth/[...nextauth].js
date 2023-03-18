import sequelize from "@/services/Sequelize";
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// sequelize.sync();



export default NextAuth({
  providers: [
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

        return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
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
