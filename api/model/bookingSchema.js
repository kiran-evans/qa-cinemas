const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    seats: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    paid: {
      type: Boolean,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('booking', bookingSchema);
