const { Schema, model } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactionBody: { type: String,  required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create a virtual property `timestamp` that formats the timestamp on the query.
// reactionSchema
 

// Initialize our Application model
const User = model('reaction', reactionSchema);

module.exports = User;
