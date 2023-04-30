const { Schema, model } = require('mongoose');

// Schema to create Post model
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date,  default: Date.now },
    username: { type: String, required: true },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction',
        },
]
});

// Create a virtual property `reactionCount` that retrieves the length of the thought's reactions array
thoughtSchema
  .virtual('reaction')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const User = model('thoughts', thoughtSchema);

module.exports = User;
