import bcrypt from 'bcrypt';

type tCryptFunction = {
  encrypt: (text: string) => Promise<string>;
  validate: (text: string, hash: string) => Promise<boolean>;
}

const saltRounds = 10;

const crypt = (): tCryptFunction => {
  return {
    async encrypt(text: string): Promise<string> {
      const salt = await bcrypt.genSalt(saltRounds);
      return await bcrypt.hash(text, salt);
    },
    async validate(text: string, hash: string): Promise<boolean> {
      return await bcrypt.compare(text, hash);
    }
  };
};


export default crypt();