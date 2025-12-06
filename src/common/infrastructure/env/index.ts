import 'dotenv/config';
import { z } from 'zod';
import { AppError } from '../../domain/errors/app-error';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3333),
  API_URL: z.string().default('http://localhost:3333'),
});

const _env = envSchema.safeParse(process.env);

// valida se houve ou não error na validação
if (!_env.success) {
  throw new AppError('Inválid environment variable is missing');
}

export const env = _env.data;
