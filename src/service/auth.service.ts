import { tSiginCredentials } from '../models/user/user.types';

export const signinService =  async (credentials: tSiginCredentials) => {
  return { 
    user: { ...credentials },
    message: 'Has iniciado sessión correctamente',
  };
};

