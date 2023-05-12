const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date,  default: Date.now },
    username: { type: String, required: true },
    //every thought has a reaction but reactions dont exist outside of thoughts
    //being used as a subdocument schema for the reactions field
    reactions: [reactionSchema]
},
{
  toJSON: {
      getters: true,
      virtuals: true,
  },
  id: false,
}
);

// Create a virtual property `reactionCount` that retrieves the length of the thought's reactions array
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
