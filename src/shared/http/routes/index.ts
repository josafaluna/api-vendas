import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send({ message: 'Hello DEV!' });
});

export default routes;
