import { ConnectionOptions } from 'typeorm';

const {
  PORT_DB,
  HOST_DB,
  PASSWORD_DB,
  USERNAME_DB,
  DATABASE_NAME,
} = process.env;

export const dbConfig = {
  type: 'mysql',
  host: HOST_DB,
  port: PORT_DB,
  username: USERNAME_DB,
  password: PASSWORD_DB,
  database: DATABASE_NAME,
  entities: ['src/models/**/*.ts||js'],
  synchronize: true,
} as ConnectionOptions;