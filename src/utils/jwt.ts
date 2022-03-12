import jsonwebtoken from 'jsonwebtoken';

const pass: string = process.env.JWT_PASSWORD || 'LqjTpg9ZJX#yttEsrKm7^g';
const expiresIn = '1d';

export type tUserId = {
  id: number;
}

type tJwt = {
  create: (payload: tUserId, key?: string) => string;
  validate: (token: string, key?: string) => tUserId;
}

const jwt: tJwt = {
  create(payload: tUserId, key: string = pass) : string {
    return jsonwebtoken.sign(payload, key, { expiresIn });
  },
  validate(token: string, key: string = pass): tUserId {
    return jsonwebtoken.verify(token, key) as tUserId;
  },
};

export default jwt;
