import { User } from './../models/User';
import { ConnectionOptions } from 'typeorm';

const {
  PORT_DB,
  HOST_DB,
  PASSWORD_DB,
  USERNAME_DB,
  DATABASE_NAME,
} = process.env;

export const db = {
  type: 'postgres',
  host: HOST_DB,
  port: PORT_DB,
  username: USERNAME_DB,
  password: PASSWORD_DB,
  database: DATABASE_NAME,
  entities: [User],
  synchronize: true,
} as ConnectionOptions;