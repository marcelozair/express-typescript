import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { connectionAsyncDb } from './connection/connection';
import routes from './routes';

async function main() {
  const app = express();
  
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  
  const connection = await connectionAsyncDb();
  if (!connection) return;
  
  app.use(routes);
  
  app.listen(process.env.PORT);
}

main();