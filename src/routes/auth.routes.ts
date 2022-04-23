import { Router } from 'express';
import schemaValidation from '../middlewares/validator/schema.validator';
import { validateForgotPassword, validateSignin, validateSignup } from '../middlewares/validator/auth/auth';
import { forgotPasswordController, signinController, signupController } from '../controller/auth.controller';

const router = Router();

router.post('/signin', schemaValidation(validateSignin), signinController);
router.post('/signup', schemaValidation(validateSignup), signupController);
router.post('/forgot-password', schemaValidation(validateForgotPassword), forgotPasswordController);

export default router;