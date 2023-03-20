import jwt from '../../utils/jwt';

export const createSessionToken = (userId: number): string => {
  return jwt.create({ id: userId });
};
