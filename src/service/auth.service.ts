import crypt from '../utils/bcrypt';
import { getRepository } from 'typeorm';
import { users } from '../models/user/User';
import { tSiginCredentials, tSigupCredentials, tUser, tUserCreated } from '../models/user/user.types';

export const signinService = async (credentials: tSiginCredentials) => {
  const userRepository = getRepository(users);
  const { email, password } = credentials;

  const user = await userRepository.findOne({ where: { email } });
  if (!user) throw new Error('El usuario ingresado no existe');

  const passwordValidate: boolean = await crypt.validate(password, user.password);
  if (!passwordValidate) throw new Error('La contraseña ingresa es incorrecta');

  // create session token

  return {
    message: 'Has iniciado sessión correctamente',
  };
};

export const signupService = async (credentials: tSigupCredentials) => {
  const userRepository = getRepository(users);
  const { email, password } = credentials;

  const userExsit: tUser | undefined = await userRepository.findOne({ where: { email } });

  if (userExsit) {
    throw new Error('Este usuario ya se encuentra registrado');
  }

  const passwordHash: string = await crypt.encrypt(password);

  const user: tUserCreated = {
    ...credentials,
    password: passwordHash,
    token: '',
  };

  const newUser: tUser = userRepository.create(user);
  await userRepository.save(newUser);

  return { message: 'Usuario creado correctamente' };
};


