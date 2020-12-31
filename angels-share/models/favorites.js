const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  whiskey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Whiskey',
    require: true
  }
}, {
  timestamps: true
}
})

module.exports = mongoose.model('Favorites', favoriteSchema)
