const { Ride } = require('../models');

const ridesData = [
  {
    title: 'Prince Charming Regal Carrousel',
    land_id: 1,
    image: "./public/images/Carousel.png"
  },
  {
    title: "Mickey's PhilharMagic",
    land_id: 1,
    image: "./public/images/Philhar.png"
  },
  {
    title: "Peter Pan's Flight",
    land_id: 1,
    image: "./public/images/Peter.png"
  },
  {
    title: "it's a small world",
    land_id: 1,
    image: "./public/images/Smallworld.png"
  },
  {
    title: 'Under the Sea ~ Journey of The Little Mermaid',
    land_id: 1,
    image: "./public/images/Littlemermaid.png"
  },
  {
    title: "The Barnstormer",
    land_id: 1,
    image: "./public/images/Barnstormer.png"
  },
  {
    title: "Dumbo the Flying Elephant",
    land_id: 1,
    image: "./public/images/Dumbo.png"
  },
  {
    title: "Mad Tea Party",
    land_id: 1,
    image: "./public/images/Teacups.png"
  },
  {
    title: "The Many Adventures of Winnie the Pooh",
    land_id: 1,
    image: "./public/images/Pooh.png"
  },
  {
    title: "Seven Dwarfs Mine Train",
    land_id: 1,
    image: "./public/images/Mine.png"
  },
  {
    title: "Tomorrowland Speedway",
    land_id: 2,
    image: "./public/images/Speedway.png"
  },
  {
    title: "Space Mountain",
    land_id: 2,
    image: "./public/images/Spacemountain.png"
  },
  {
    title: "Astro Orbiter",
    land_id: 2,
    image: "./public/images/Orbit.png"
  },
  {
    title: "Tomorrowland Transit Authority PeopleMover",
    land_id: 2,
    image: "./public/images/Peoplemover.png"
  },
  {
    title: "Walt Disney's Carousel of Progress",
    land_id: 2,
    image: "./public/images/Progress.png"
  },
  {
    title: "Buzz Lightyear's Space Ranger Spin",
    land_id: 2,
    image: "./public/images/Splashmountain.png"
  },
  {
    title: "Monsters, Inc. Laugh Floor",
    land_id: 2,
    image: "./public/images/Laugh.png"
  },
  {
    title: "The Hall of Presidents",
    land_id: 3,
    image: "./public/images/Hallofpresidents.png"
  },
  {
    title: "Liberty Square Riverboat",
    land_id: 3,
    image: "./public/images/Riverboat.png"
  },
  {
    title: "Haunted Mansion",
    land_id: 3,
    image: "./public/images/Haunted.png"
  },
  {
    title: "Swiss Family Treehouse",
    land_id: 4,
    image: "./public/images/Treehouse.png"
  },
  {
    title: "The Magic Carpets of Aladdin",
    land_id: 4,
    image: "./public/images/Aladdin.png"
  },
  {
    title: "Jungle Cruise",
    land_id: 4,
    image: "./public/images/Jungle.png"
  },
  {
    title: "Walt Disney's Enchanted Tiki",
    land_id: 4,
    image: "./public/images/Tiki.png"
  },
  {
    title: "Pirates of the Caribbean",
    land_id: 4,
    image: "./public/images/Pirates.png"
  },
  {
    title: "Splash Mountain",
    land_id: 5,
    image: "./public/images/Splashmountain.png"
  },
  {
    title: "Big Thunder Mountain Railroad",
    land_id: 5,
    image: "./public/images/Thundermountain.png"
  },
  {
    title: "Country Bear Jamboree",
    land_id: 5,
    image: "./public/images/Country.png"
  },

];

const seedProducts = () => Ride.bulkCreate(ridesData);

module.exports = seedProducts;