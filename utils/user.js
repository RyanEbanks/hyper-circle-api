const { User } = require('../models');

const users = [
    {
        "username": "pacman24",
        "email": "pacisback@gmail.com",
    },
    {
        "username": "slyguy94",
        "email": "supersly@hotmail.com",
    },
    {
        "username": "birdboy48",
        "email": "avain@hotmail.com",
    },
    {
        "username": "gentlegiant63",
        "email": "ultrastrong@outlook.com",
    },
    {
        "username": "hypersonic17",
        "email": "chaoscontrol@yahoo.com",
    },
];

const seedUsers = () => User.insertMany(users);

module.exports = seedUsers;