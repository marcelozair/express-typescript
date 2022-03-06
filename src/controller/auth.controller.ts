import { Request, Response } from 'express';
import { tSiginCredentials, tSigupCredentials } from '../models/user/user.types';
import { signinService } from '../service/auth.service';

export const signinController = async (req: Request, res: Response) => {
  const userCredentials: tSiginCredentials = req.body;
  const userSignin = await signinService(userCredentials);

  return res.status(200).json(userSignin);
};

export const signupController = async (req: Request, res: Response) => {
  const userCredentials: tSigupCredentials = req.body;
  const userSignup = await signinService(userCredentials);

  return res.status(200).json(userSignup);
};
