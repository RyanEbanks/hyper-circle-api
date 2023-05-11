const { Reaction } = require('../models/Reaction');

const reactions = [
    {
        'reactionBody': 'Yo thats sick!',
        'username': 'slyguy94',
    },
    {
        'reactionBody': 'Amazing',
        'username': 'pacman24', 
    },
    {
        'reactionBody': 'Excellent',
        'username': 'hypersonic17',
    },
    {
        'reactionBody': 'Yessir!',
        'username': 'gentlegiant63',
    },
    {
        'reactionBody': 'Keep fighting',
        'username': 'birdboy48', 
    },
];


const seedReactions = async () => {
  try {
    await reactionSchema.insertMany(
      reactions.map(reaction => ({
        ...reaction,
        reactionId: Types.ObjectId(),
        createdAt: Date.now(),
      })),
    );
    console.log('Reactions seeded successfully');
  } catch (err) {
    console.error(err);
  }
};

module.exports = seedReactions;


