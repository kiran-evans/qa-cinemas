const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 2,
  },
  classification: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    min: 10,
  },
  dateReleased: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    required: false
  }
});
module.exports = mongoose.model('movie', moviesSchema);
