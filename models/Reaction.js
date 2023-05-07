const { Schema, model } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactionBody: { type: String,  required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, 
{
  toJSON: {
      virtuals: true,
  },
  id: false,
}
);

// Create a virtual property `timestamp` that formats the timestamp on the query.
// reactionSchema
reactionSchema
.virtual('timestamp')
// Getter
.get(function () {
  return this.reactions.length;
});

// Initialize our Application model
const Reaction = model('reaction', reactionSchema);


module.exports = Reaction;
