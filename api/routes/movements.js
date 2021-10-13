const express = require('express');
const router = express.Router();
const Movement = require('../models/Movement');

// @route GET /api/movements
router.get('/', async (req, res) => {
  const movements = await Movement.find();

  res.status(200).send({
    status: 200,
    data: movements
  });
});

module.exports = router;