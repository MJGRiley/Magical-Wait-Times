const { Lands } = require('../models');

const landsData = [
  {
    title: 'fantasyland',
    description: 'Escape the real world and jump into a place of imagination and fantasy!'
  },
  {
    title: 'tomorrowland',
    description: 'Glimpse into the future and see all the magic that lies ahead!'
  },
  {
    title: 'libertysquare',
    description: 'History can always be made magical!'
  },
  {
    title: 'adventureland',
    description: "Far from civilization, explore exotic jungles, animals, adventure, and more!"
  },
  {
    title: 'frontierland',
    description: 'Themed to mimic architecture of the 19th century American Frontier, strap on your cowboy boots and explore the wild wild west!'
  },
];

const seedProducts = () => Lands.bulkCreate(landsData);

module.exports = seedProducts;