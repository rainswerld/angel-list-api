const mongoose = require('mongoose')

const whiskeySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Whiskey', whiskeySchema)
