import { Response } from 'express';
import { BodyRequest } from 'global';
import { NewUser } from 'src/types/user';
import { AuthSignIn } from 'src/types/auth';
import { createSessionToken } from './auth.service';
import { createUser, findUserByEmail } from '../user/user.service';

export const signInController = async (req: BodyRequest<AuthSignIn>, res: Response) => {
  const credentials = req.body;

  try {
    const user = await findUserByEmail(credentials.email);
    const token = createSessionToken(user.id);
    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const signUpController = async (req: BodyRequest<NewUser>, res: Response) => {
  const userCredentials = req.body;

  try {
    const newUser = await createUser(userCredentials);
    const token = createSessionToken(newUser.id);

    return  res.status(201).json({ message: 'User created successful', token });
  } catch (error) {
    return res.status(400).json(error);
  }
};