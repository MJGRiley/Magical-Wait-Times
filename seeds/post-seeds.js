const { Post } = require('../models');

const postData = [
  {
    title: "It's A Small World is My Favorite!",
    text: 'This was my absolute favorite ride! A great way to cool off with slow and fun ride.',
    rating: 5,
    user_id: 1,
    
  },
  {
    title: "DON'T RIDE SPACE MOUNTAIN!",
    text: 'iloveapis',
  },
  {
    username: 'joshcoder',
    password: 'disneyrocks'
  },
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;