const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Technique = require('../models/Technique');
const jwtauth = require('../middleware/jwtauth');

// @route GET /api/techniques
// Get all techniques
// protected == true
router.get('/', jwtauth, async (req, res) => {
  let techniques = [];
  let query = new RegExp(req.query.q);

  if (query) {
    techniques = await Technique.find({$or: [{'name.romanji': query}, {'name.eng_trans': query}, {style: query}]});
  } else {
    techniques = await Technique.find();
  }

  res.status(200).send({
    status: 200,
    count: techniques.length,
    data: techniques
  });
});

// @route GET /api/techniques/:id
// Get a single technique by id
// protected == true
router.get('/:id', jwtauth, async (req, res) => {
  const id = req.params.id;
  const idObject = mongoose.Types.ObjectId(id);

  const technique = await Technique.aggregate(
    [
      {$match: {'_id': idObject}}, 
      {$lookup: {from: 'movements', localField: 'name.romanji', foreignField: 'name', as: '_movement'}}, 
      {$set: {'movements': {$arrayElemAt: ['$_movement.steps', 0]}, omote_to_ura: '$_movement.omote_to_ura'}}, 
      {$project: {'_movement': 0 }}
    ]
  );

  res.status(200).send({
    status: 200,
    data: technique
  });
});

module.exports = router;