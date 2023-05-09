const { Thought } = require('../models');

const thoughts = [
    {
        'thoughtText': 'My game might be old but its a classic',
        'username': 'pacman24',
    },
    {
        'thoughtText': 'Check me out in this tournament next week',
        'username': 'slyguy94',
    },
    {
        'thoughtText': 'I believe I can fly',
        'username': 'birdboy48',
    },
    {
        'thoughtText': 'Being tall is hard',
        'username': 'gentlegiant63',
    },
    {
        'thoughtText': 'Gotta go fast',
        'username': 'hypersonic17',
    },
];

const seedThoughts = () => Thought.insertMany(thoughts);

module.exports = seedThoughts;
