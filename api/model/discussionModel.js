const mongoose = require('mongoose');

const { Schema } = mongoose;

const discussionSchema = new Schema({
    movie: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    dateAdded: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Discussions = mongoose.model('discussions', discussionSchema)
module.exports = { Discussions };