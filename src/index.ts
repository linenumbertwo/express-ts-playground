import express, { Response, Request, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    // origin: 'https://localhost:3000',
    // origin: '*',
    origin: 'https://www.google.com/',
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
  })
);

app.get('/', (req, res, next) => {
  console.log(req.cookies);
  // res.status(200).json({ a: 'Hello World!' });
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/ping', (req, res, next) => {
  Promise.reject('Rejection Error').catch((err) => console.log(err));
});

app.put('/test', (req, res, next) => {
  res.status(200).json({ Hello: 'World!' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    console.log('1');
    console.log(err);
    res.status(500).send('Unknown Error!');
  }
});

// process.on('exit', (code) => {
//   console.log('Sensed');
//   console.log(code);
// });

// process.exit(0);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
