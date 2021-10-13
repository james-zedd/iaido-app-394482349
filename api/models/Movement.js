const mongoose = require('mongoose');

const MovementSchema = mongoose.Schema({
  tech_name: {
    type: String
  },
  omote_to_ura: {
    type: Boolean
  },
  steps: {
    type: Array
  }
});

module.exports = mongoose.model('movement', MovementSchema);