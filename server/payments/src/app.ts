import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@ssktickets/common';

import { createChargeRouter } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());

app.use(
  cors({
    origin: true,
    allowedHeaders: ['Allow-Origin-With-Credentials', 'Content-Type'],
    credentials: true,
  })
);

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);

app.use(createChargeRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
