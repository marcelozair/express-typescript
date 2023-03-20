import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { connection } from './connection/connection';
import { AuthRouter } from './modules/auth/auth.routes';

async function main() {
  const app = express();
  const PORT = process.env.PORT || 4000;

  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());

  await connection();

  app.use('/auth', AuthRouter);

  console.log(`Server running in port http://localhost:${PORT}/`);
  app.listen(PORT);
}

main();