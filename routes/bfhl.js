const express = require('express');
const router = express.Router();

router.post('/bfhl', (req, res) => {
  const { data } = req.body;

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestAlphabet = alphabets.length ? [alphabets.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).pop()] : [];

  res.json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet,
  });
});

router.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1,
  });
});

module.exports = router;

const bfhlRoutes = require('./routes/bfhl');
app.use('/bfhl', bfhlRoutes);
