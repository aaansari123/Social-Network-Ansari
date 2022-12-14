const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    username: [{
 
      type: String,
      ref: 'Users',
      required: true,
    }],
    reactions:[{
 
        type: String,
        ref: 'Reaction',
        required: true,
      }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return `${this.reactions.length}`
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;