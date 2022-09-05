const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    seats: {
      type: Number,
    },
    ticketType: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('booking', bookingSchema);
