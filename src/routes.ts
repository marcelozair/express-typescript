import { Router, Request, Response } from 'express';
import routerAuth from './routes/auth.routes';

const RouterApp = Router();

RouterApp.get('/', async (req: Request, res: Response) => {
  return res.json({ message: '¡Welcome my friend!'});
});

RouterApp.use('/auth', routerAuth);

export default RouterApp;