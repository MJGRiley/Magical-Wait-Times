const { User } = require('../models');

const userData = [
  {
    username: 'rachel1016',
    password: 'ilovedisney',
  },
  {
    username: 'morganwinmode',
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