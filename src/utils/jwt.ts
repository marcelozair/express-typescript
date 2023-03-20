import jsonwebtoken from 'jsonwebtoken';

const pass: string = process.env.JWT_PASSWORD || 'LqjTpg9ZJX#yttEsrKm7^g';
const expiresIn = '1d';

export type UserPayload = {
  id: number;
}

const jwt = {
  create(payload: UserPayload, key: string = pass) : string {
    return jsonwebtoken.sign(payload, key, { expiresIn });
  },
  validate(token: string, key: string = pass): UserPayload {
    return jsonwebtoken.verify(token, key) as UserPayload;
  },
};

export default jwt;
