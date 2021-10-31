const { Post } = require('../models');

const postData = [
  {
    title: "It's A Small World is My Favorite!",
    description: 'This was my absolute favorite ride! A great way to cool off with slow and fun ride.',
    user_id: 1,
    ride_id: 4
  },{
    title: "Space Mountain is soooo fast",
    description: 'Ride was way too fast and no warning was given to me by any Cast Member.',
    user_id: 3,
    ride_id: 12
  }
];

const seedProducts = () => Post.bulkCreate(postData);

module.exports = seedProducts;