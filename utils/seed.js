const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtData, reactionData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing data
  await User.deleteMany({});
  await Thought.deleteMany({});
  
  console.log('deleted user, thought, and reaction data!');

  // Create user and thought
  const userDB = await User.insertMany(userData);
  const thoughtDB = await Thought.insertMany(thoughtData);
  console.log('users and thoughts seeded');

  // Insert Thoughts into the users thought array
  for (let i = 0; i < thoughtDB.length; i++) {
    const thought = thoughtDB[i];
    const user = userDB.find((user) => user.username === thought.username);
    user.thoughts.push(thought);
    await user.save();
  }


  console.log('reactions seeded');
  process.exit(0);
});
