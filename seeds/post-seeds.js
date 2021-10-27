const { Post } = require('../models');

const postData = [
  {
    title: "It's A Small World is My Favorite!",
    description: 'This was my absolute favorite ride! A great way to cool off with slow and fun ride.',
    rating: 5,
    user_id: 1,
    ride_id: 4
  },{
    title: "It's A Small World is HORRIBLE!",
    description: 'This cool off with slow and fun ride.',
    rating: 1,
    user_id: 3,
    ride_id: 2
  }
];

const seedProducts = () => Post.bulkCreate(postData);

module.exports = seedProducts;