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
  data_base: DATABASE_NAME,
  entities: ['lib/models/**/*.js'],
  synchronize: false,
} as ConnectionOptions;