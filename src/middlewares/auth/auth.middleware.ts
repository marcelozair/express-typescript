import { getRepository } from 'typeorm';
import { users } from '../../models/user/User';
import jwt, { tUserId } from '../../utils/jwt';
import { NextFunction, Request, Response } from 'express';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Authorization = req.headers.Authorization as string;
  if (!Authorization) return res.status(400).json({ message: 'Token invalido' });

  const userRepository = getRepository(users);

  const { id } : tUserId = jwt.validate(Authorization);
  const user = await userRepository.findOne(id);

  if (!user) return res.status(400).json({ message: 'Token invalido' });

  req.userId = user.id;
  next();
};
