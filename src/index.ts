import express, { Response, Request, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    // origin: 'https://localhost:3000',
    // origin: '*',
    // origin: 'https://www.google.com/',
    // methods: ['GET', 'POST', 'PUT'],
    // credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.status(500).send('Unknown Error!');
  }
});

app.use((req, res, next) => {
  console.log('1');
  next();
});
app.use((req, res, next) => {
  console.log('2');
  next();
});
app.use((req, res, next) => {
  console.log('3');
  next();
});

app.use(router);

app.use((req, res, next) => {
  console.log('router 이후');
  next();
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
