const { Schema, model } = require('mongoose');

// Schema to create Student model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280,
      },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    username: [{
      type: String,
      required: true,
    }],

  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;