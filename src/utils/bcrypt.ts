import bcrypt from 'bcrypt';

const saltRounds = 10;

const crypt = {
  async encrypt(text: string): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(text, salt);
  },
  async validate(text: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(text, hash);
  },
};

export default crypt;
