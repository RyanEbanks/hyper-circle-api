const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const seedUsers = require('../utils/user');
const seedThoughts = require('../utils/thought');
const reactions = require('../utils/reaction');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
 

  // Drop existing user
  await User.deleteMany({});
  console.log('deleted all');

  // Create users
  await seedUsers();

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create thoughts
  await seedThoughts();

   // Drop existing reactions
   await Reaction.deleteMany({});

  // Create thoughts
  // for (let i = 0; i < thoughts.length; i++) {
  //   const { username } = thoughts[i];
  //   const user = await User.findOne({ username });

    // If the user exists, create the thought and add it to the user's thoughts array
  //   if (user) {
  //     const thought = await Thought.create(thoughts[i]);
  //     user.thoughts.push(thought);
  //     await user.save();
  //   }
  // }

  for (let i = 0; i < reactions.length; i++) {
    const { username, thoughtId } = reactions[i];
    const user = await User.findOne({ username });
    const thought = await Thought.findOne({ _id: thoughtId });

    // If the user and thought exist, create the reaction and add it to the thought's reactions array
    if (user && thought) {
      const reaction = await Reaction.create(reactions[i]);
      thought.reactions.push(reaction);
      await thought.save();
    }
  }

  console.log('users seeded');
  console.log('thoughts seeded');
  console.log('reactions seeded');
  process.exit(0);
});
