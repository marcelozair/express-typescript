import { Router } from 'express';
import { signInController, signUpController } from './auth.controller';
import schemaValidation from '../../middlewares/validator/schema.validator';
import { validateSignin, validateSignup } from '../../middlewares/validator/auth/auth';

const AuthRouter = Router();

AuthRouter.post('/sign-in', schemaValidation(validateSignin), signInController);
AuthRouter.post('/sign-up', schemaValidation(validateSignup), signUpController);

export { AuthRouter };