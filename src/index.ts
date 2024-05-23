import express, { Response, Request, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(
//   cors({
//     origin: '*',
//   })
// );

app.get('/', (req, res, next) => {
  // throw new Error('에러 던진다잉?');
  res.status(200).send('Hello World!');
});

app.get('/ping', (req, res, next) => {
  Promise.reject('Rejection Error').catch((err) => console.log(err));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    console.log('1');
    console.log(err);
    res.status(500).send('Unknown Error!');
  }
});

process.on('unhandledPromiseRejection', () => {
  console.log('Promise rejection error');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
