import { getRepository } from 'typeorm';
import { NewUser } from 'src/types/user';
import { User } from './../../models/User';
import { NotFoundError } from './../../utils/errors';

export const createUser = async (body: NewUser): Promise<User>=> {
  const userRepository = getRepository(User);

  const userFound = await userRepository.findOne({ where: { email: body.email } });
  if (userFound) throw new Error('User already exist');

  const createUser = userRepository.create(body);

  const user = await userRepository.save(createUser);

  return user;
};

export const findUserByEmail = async (email: string): Promise<User>=> {
  const userRepository = getRepository(User);

  const userFound = await userRepository.findOne({ where: { email } });
  if (!userFound) throw new NotFoundError('Account does not found');

  return userFound;
};