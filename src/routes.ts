import { Router } from 'express';
import routerAuth from './routes/auth.routes';

const RouterApp = Router();

RouterApp.use(routerAuth);

export default RouterApp;