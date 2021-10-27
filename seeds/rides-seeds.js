const { Ride } = require('../models');

const ridesData = [
  {
    title: 'Prince Charming Regal Carrousel',
    land_id: 1,
  },
  {
    title: "Mickey's PhilharMagic",
    land_id: 1,
  },
  {
    title: "Peter Pan's Flight",
    land_id: 1,
  },
  {
    title: "it's a small world",
    land_id: 1,
  },
  {
    title: 'Under the Sea ~ Journey of The Little Mermaid',
    land_id: 1,
  },
  {
    title: "The Barnstormer",
    land_id: 1,
  },
  {
    title: "Dumbo the Flying Elephant",
    land_id: 1,
  },
  {
    title: "Mad Tea Party",
    land_id: 1,
  },
  {
    title: "The Many Adventures of Winnie the Pooh",
    land_id: 1,
  },
  {
    title: "Seven Dwarfs Mine Train",
    land_id: 1,
  },
  {
    title: "Tomorrowland Speedway",
    land_id: 2,
  },
  {
    title: "Space Mountain",
    land_id: 2,
  },
  {
    title: "Astro Orbiter",
    land_id: 2,
  },
  {
    title: "Tomorrowland Transit Authority PeopleMover",
    land_id: 2,
  },
  {
    title: "Walt Disney's Carousel of Progress",
    land_id: 2,
  },
  {
    title: "Buzz Lightyear's Space Ranger Spin",
    land_id: 2,
  },
  {
    title: "Monsters, Inc. Laugh Floor",
    land_id: 2,
  },
  {
    title: "The Hall of Presidents",
    land_id: 3,
  },
  {
    title: "Liberty Square Riverboat",
    land_id: 3,
  },
  {
    title: "Haunted Mansion",
    land_id: 3,
  },
  {
    title: "Swiss Family Treehouse",
    land_id: 4,
  },
  {
    title: "The Magic Carpets of Aladdin",
    land_id: 4,
  },
  {
    title: "Jungle Cruise",
    land_id: 4,
  },
  {
    title: "Walt Disney's Enchanted Tiki",
    land_id: 4,
  },
  {
    title: "Pirates of the Caribbean",
    land_id: 4,
  },
  {
    title: "Splash Mountain",
    land_id: 5,
  },
  {
    title: "Big Thunder Mountain Railroad",
    land_id: 5,
  },
  {
    title: "Country Bear Jamboree",
    land_id: 5,
  },

];

const seedProducts = () => Ride.bulkCreate(ridesData);

module.exports = seedProducts;