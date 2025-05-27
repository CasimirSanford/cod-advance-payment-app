import express from 'express';
const router = express.Router();

let settings = {
  advanceAmount: '50',
  customText: 'Pay ₹50 in advance to confirm your COD order.',
};

router.post('/', async (req, res) => {
  const { advanceAmount, customText } = req.body;
  settings.advanceAmount = advanceAmount;
  settings.customText = customText;
  res.status(200).send('OK');
});

router.get('/', async (req, res) => {
  res.json(settings);
});

export default router;