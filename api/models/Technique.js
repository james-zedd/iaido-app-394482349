const mongoose = require('mongoose');

const TechniqueSchema = mongoose.Schema({
  name: {
    romanji: {
      type: String
    },
    eng_trans: {
      type: String
    },
    hiragana: {
      type: String
    }
  }, 
  style: {
    type: String,
    enum: ['suio ryu', 'mugai ryu', 'kashima shinto ryu', 'eishin ryu', 'cafi', 'omori ryu'],
    default: 'suio ryu'
  },
  position: {
    type: String,
    enum: ['standing', 'kneeling', 'both'],
    default: 'standing'
  },
  tech_group: {
    type: String,
    enum: ['kyu', 'dan', 'extra', 'kata', 'kumi iai', 'seitei kata'],
    default: 'kyu'
  },
  rank_exam: {
    type: String,
    enum: ['7th kyu', '6th kyu', '5th kyu', '4th kyu', '3rd kyu', '2nd kyu', '1st kyu', 'shodan', 'nidan', 'sandan'],
    default: '7th kyu'
  },
  movements: {
    type: Array
  }
});

module.exports = mongoose.model('technique', TechniqueSchema);