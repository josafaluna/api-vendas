import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/index';
import AppError from '@shared/erros/AppError';

const app = express();
app.use(cors);
app.use(express.json());

// Routes
app.use(routes);

// Middleware para tratamento de erro
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    // valida se o error é uma instancia da Classe AppError
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Running server pot 3333!');
});
