//Data for each category

const userData = [
    {
        "username": "pacman24",
        "email": "pacisback@gmail.com",
        'thoughts': []
    },
    {
        "username": "slyguy94",
        "email": "supersly@hotmail.com",
        'thoughts': []
    },
    {
        "username": "birdboy48",
        "email": "avain@hotmail.com",
        'thoughts': []
    },
    {
        "username": "gentlegiant63",
        "email": "ultrastrong@outlook.com",
        'thoughts': []
    },
    {
        "username": "hypersonic17",
        "email": "chaoscontrol@yahoo.com",
        'thoughts': []
    },
];

const thoughtData = [
    {
        'thoughtText': 'My game might be old but its a classic',
        'username': 'pacman24',
        'reactions': []
    },
    {
        'thoughtText': 'Check me out in this tournament next week',
        'username': 'slyguy94',
        'reactions': []
    },
    {
        'thoughtText': 'I believe I can fly',
        'username': 'birdboy48',
        'reactions': []
    },
    {
        'thoughtText': 'Being tall is hard',
        'username': 'gentlegiant63',
        'reactions': []
    },
    {
        'thoughtText': 'Gotta go fast',
        'username': 'hypersonic17',
        'reactions': []
    },
];

const reactionData = [
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
  
  //Pushing reactions into the thoughts db
  function addReactionToThought() {
    reactionData.forEach(reaction => {
      const thought = thoughtData.find(thought => thought.username === reaction.username);
      if (thought) {
        thought.reactions.push(reaction);
      }
    });
  }
  
  addReactionToThought();

  module.exports = { userData, thoughtData }