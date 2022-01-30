import { Request, Response } from 'express';
import { tSiginCredentials } from '../models/user/user.types';
import { signinService } from '../service/auth.service';

export const signinController = async (req: Request, res: Response) => {
  const userCredentials : tSiginCredentials = req.body;
  const userSignin = await signinService(userCredentials);

  return res.status(200).json(userSignin);
};
