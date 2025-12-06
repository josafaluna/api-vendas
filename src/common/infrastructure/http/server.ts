import { app } from './app';
import { env } from '@/common/infrastructure/env';

app.listen(env.PORT, () => {
  console.log(`Server listening on ${env.PORT}`);
  console.log('API docs available at Get /docs.');
});
