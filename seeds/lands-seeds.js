const { Lands } = require('../models');

const landsData = [
  {
    title: 'Fantasyland',
  },
  {
    title: 'Tomorrowland',
  },
  {
    title: 'Liberty Square',
  },
  {
    title: 'Adventureland',
  },
  {
    title: 'Frontierland',
  },
];

const seedProducts = () => Lands.bulkCreate(landsData);

module.exports = seedProducts;