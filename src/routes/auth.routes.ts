import { Router } from 'express';
import { signinController } from '../controller/auth.controller';
import { validateSignin } from '../middlewares/validator/auth/signin.schema';
import schemaValidation from '../middlewares/validator/schema.validator';

const router = Router();

router.post('/sign-in', schemaValidation(validateSignin), signinController);

export default router;