import { Router, Request, Response } from 'express';
import routerAuth from './routes/auth.routes';

const RouterApp = Router();

RouterApp.get('/', (req: Request, res: Response) => {
  return res.send('<h2>Hello my little friend</h2>');
});

RouterApp.use('/auth', routerAuth);

export default RouterApp;