import 'reflect-metadata';
import { db } from './db';
import { createConnection } from 'typeorm';

export const connection = async () => {
  try {
    await createConnection(db);
  } catch (error) {
    console.error(error);
  }
};