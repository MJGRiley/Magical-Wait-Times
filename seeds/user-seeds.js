const { User } = require('../models');

const userData = [
  {
    username: 'rachel1016',
    password: 'ilovedisney',//these password were used before we added bcrypt
  },
  {
    username: 'morganwinmode',//you now need to register a new user to login
    password: 'iloveapis',
  },
  {
    username: 'joshcoder',
    password: 'disneyrocks'
  },
  {
    username: 'deshaynad',
    password: 'cssisthebest'
  },
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;