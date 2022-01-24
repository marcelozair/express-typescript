import { Router, Response, Request } from 'express';

const router = Router();

router.get('/sign-in', async (req: Request, res: Response) => {
  res.json({
    message: 'test api connection',
  });
});

export default router;