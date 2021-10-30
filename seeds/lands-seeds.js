const { Lands } = require('../models');

const landsData = [
  {
    title: 'Fantasyland',
    description: 'Escape the real world and jump into a place of imagination and fantasy!'
  },
  {
    title: 'Tomorrowland',
    description: 'Glimpse into the future and see all the magic that lies ahead!'
  },
  {
    title: 'Liberty Square',
    description: 'History can always be made magical!'
  },
  {
    title: 'Adventureland',
    description: "Far from civilization, explore exotic jungles, animals, adventure, and more!"
  },
  {
    title: 'Frontierland',
    description: 'Themed to mimic architecture of the 19th century American Frontier, strap on your cowboy boots and explore the wild wild west!'
  },
];

const seedProducts = () => Lands.bulkCreate(landsData);

module.exports = seedProducts;