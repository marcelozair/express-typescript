import { Router } from 'express';
import { signinController, signupController } from '../controller/auth.controller';
import { validateSignin, validateSignup } from '../middlewares/validator/auth/auth';
import schemaValidation from '../middlewares/validator/schema.validator';

const router = Router();

router.post('/sign-in', schemaValidation(validateSignin), signinController);
router.post('/sign-up', schemaValidation(validateSignup), signupController);

export default router;