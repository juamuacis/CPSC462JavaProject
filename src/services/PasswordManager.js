import bcrypt from "bcrypt";

export default class PasswordManager {

  #saltRounds = 10;

  /**
   * Hash a user password
   * @param {string} password 
   * @returns promise with password hash
   */
  hash (password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, this.#saltRounds, function(err, hash) {
        if (err) {
          reject(err);
          return;
        }
        resolve(hash);
      });
    });
  }

  /**
   * Verify if the given password is correct
   * @param {string} password 
   * @param {string} hash 
   * @returns promise with true
   */
  compare (password, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, function(err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  }
}