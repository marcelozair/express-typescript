import { Router, Request, Response } from 'express';
import routerAuth from './routes/auth.routes';

const RouterApp = Router();

RouterApp.get('/', (req: Request, res: Response) => {
  return res.send('Hello my little friend');
});

RouterApp.use('/auth', routerAuth);

export default RouterApp;