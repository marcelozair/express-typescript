import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { dbConfig } from './db';

export const connectionAsyncDb = async () => {
  try {
    return await createConnection(dbConfig);
  } catch (error: any) {
    const { code, errno, sqlMessage, sqlState } = error;
    console.log(`Code: ${code} - ${errno}\nMessage: ${sqlMessage}\nState: ${sqlState}`);
  }
};