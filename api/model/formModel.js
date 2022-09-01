const mongoose = require('mongoose');

const formSchema = mongoose.Schema(
  {
    header: {
      type: String,
      required: true,
      min: 2,
    },
    userEmail: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
      min: 10,
    },
    isResolved: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('contactForm', formSchema);
