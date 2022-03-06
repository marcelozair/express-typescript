import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { connectionAsyncDb } from './connection/connection';
import routes from './routes';

async function main() {
  const app = express();
  const PORT = process.env.PORT || '4000';

  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());

  const connection = await connectionAsyncDb();
  if (!connection) return;

  app.use(routes);

  console.log(`Server running in port http://localhost:${PORT}/`);
  app.listen(PORT);
}

main();