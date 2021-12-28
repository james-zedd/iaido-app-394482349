const express = require('express');
const router = express.Router();
const Movement = require('../models/Movement');
const jwtauth = require('../middleware/jwtauth');

// @route GET /api/movements
// Get all movements
// protected == true
router.get('/', jwtauth, async (req, res) => {
  const movements = await Movement.find();

  res.status(200).send({
    status: 200,
    data: movements
  });
});

module.exports = router;