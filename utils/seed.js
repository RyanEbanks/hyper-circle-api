const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const seedUsers = require('../utils/user');
const seedThoughts = require('../utils/thought');
const seedReactions = require('../utils/reaction');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing data
  await User.deleteMany({});
  await Thought.deleteMany({});
  await Reaction.collection.deleteMany({});
  console.log('deleted all');

  // Create users
  await seedUsers();

  // Create thoughts
  await seedThoughts();

  // Create reactions
  await seedReactions();

  console.log('users seeded');
  console.log('thoughts seeded');
  console.log('reactions seeded');
  process.exit(0);
});
