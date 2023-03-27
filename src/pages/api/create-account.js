import PasswordManager from '../../services/PasswordManager';
import User from '../../models/User';
import { randomUUID } from 'crypto';

const passwordManager = new PasswordManager();

export default async function createAccount(req, res) {
  const body = req.body;

  const name     = req.body.name;
  const email    = req.body.email;
  const password = await passwordManager.hash(body.password);

  try {
    await User.create({
      id: randomUUID(),
      name,
      email,
      password
    });

    res.status(200).json({message: "success"})
  } catch (error) {
    console.log(error.errors);

    let errorKey     = "";
    let errorMessage = "";

    for (const err of error.errors) {
      switch(err.validatorKey) {
        case "not_unique":
          errorKey     = "not_unique_email";
          errorMessage = "An account with this email already exists. " +
                         "Please try again with a different email account.";
          break;
        default:
          errorKey     = "unexpected";
          errorMessage = "An unexpected error occurred. Please try again.";
      }
    }

    res.status(400).json({error: errorKey, message: errorMessage});
    return;
  }
}
