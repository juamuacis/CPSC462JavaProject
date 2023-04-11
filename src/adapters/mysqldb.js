import Account from "../models/Account";
import User from "../models/User"

export default function MyAdapter(client, options = {}) {
  return {
    async createUser(user) {
      const user_ = await User.findOne({
        where: {
          email: user.email
        }
      });
      if (user_ !== null) {
        return user_;
      }

      const newUser_ = await User.create(user);

      return {
        ...newUser_,
        id: newUser_.id
      }
    },
    async getUser(id) {
      const user_ = await User.findByPk(id);
      
      return user_;
    },
    async getUserByEmail(email) {
      const user_= await User.findOne({
        where: { 
          email: email
        }
      }); 

      return user_;
    },
    async getUserByAccount({ providerAccountId, provider }) {
      const account_ = await Account.findOne({
        where: {
          provider: provider,
          providerAccountId: providerAccountId
        }
      }); 
      if (account_ === null) {
        return;
      }

      const user_ = await this.getUser(account_.userId);

      return user_;
    },
    async updateUser(user) {
      const user_ = await this.getUser(user.id);

      if (user === null) {
        throw new Error(`Can not update user. Unable to find user`);
      }

      const newUser_ = {
        ...user_,
        ...user
      };

      const updatedUser = await User.update(newUser_, {
        where: {
          id: user.id
        }
      });

      return user;      
    },
    async deleteUser(userId) {
      const deleted_ = await User.destroy({
        where: {
          id: userId
        }
      })
      return deleted_;
    },
    async linkAccount(account) {
      const insert_ = Account.create(account)
      return insert_.id;
    },
    async unlinkAccount({ providerAccountId, provider }) {
      const unlinked_ = Account.destroy({
        where: {
          providerAccountId,
          provider
        }
      });
      return unlinked_;
    },
    async createSession({ sessionToken, userId, expires }) {
      return
    },
    async getSessionAndUser(sessionToken) {
      return
    },
    async updateSession({ sessionToken }) {
      return
    },
    async deleteSession(sessionToken) {
      return
    },
    async createVerificationToken({ identifier, expires, token }) {
      return
    },
    async useVerificationToken({ identifier, token }) {
      return
    },
  }
}