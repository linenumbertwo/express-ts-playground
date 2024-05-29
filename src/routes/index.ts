import express from 'express';

const router = express.Router();

const someAsyncFunction = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong!')); // 1초 후에 에러 발생
    }, 1000);
  });
};

router.get('/', (req, res, next) => {
  console.log('GET `/`');
  res.status(200).json({ message: 'Hello World!' });
});

router.get('/ping', async (req, res, next) => {
  const unhandledAsync = await someAsyncFunction();
  console.log(unhandledAsync);
  res.status(200).send({ unhandledAsync });
});

router.put('/test', (req, res, next) => {
  res.status(200).json({ Hello: 'World!' });
});

export default router;
