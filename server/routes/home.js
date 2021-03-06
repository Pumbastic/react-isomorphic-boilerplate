import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const preloadedState = { homeReducer: { query: 'SSR HOME' } };
  res.react(preloadedState);
});

export default router;
