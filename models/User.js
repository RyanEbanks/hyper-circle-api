const { Schema, model } = require('mongoose');

// Schema to create Post model
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: {type: String, 
        required: true, 
        unique: true,
        //This is supposed to match a valid email using regex
        match: /.+\@.+\..+/,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
]
});

// Create a virtual property `friendCount` that gets the length of the user's friends array field
applicationSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.username.length;
  });

// Initialize our Application model
const User = model('user', userSchema);

module.exports = User;
