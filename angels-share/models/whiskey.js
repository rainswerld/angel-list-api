const mongoose = require('mongoose')

const whiskeySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  },
  rating: {
    type: Number,
    enum: [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5]
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
