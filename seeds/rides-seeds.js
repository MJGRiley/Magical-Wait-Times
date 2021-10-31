const { Ride } = require('../models');

const ridesData = [
  {
    title: 'Prince Charming Regal Carrousel',
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635714570/Disney/Screen_Shot_2021-10-31_at_17.09.17_i7zore.png"
  },
  {
    title: "Mickey's PhilharMagic",
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635642795/Disney/Philhar_sdln0c.png"
  },
  {
    title: "Peter Pan's Flight",
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709437/Disney/Peter_y58sys.png"
  },
  {
    title: "it's a small world",
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709442/Disney/Smallworld_fia1oe.png"
  },
  {
    title: 'Under the Sea ~ Journey of The Little Mermaid',
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709435/Disney/Littlemermaid_rrsbcn.png"
  },
  {
    title: "The Barnstormer",
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709416/Disney/Barnstormer_uumkhf.png"
  },
  {
    title: "Dumbo the Flying Elephant",
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709427/Disney/Dumbo_l5gebo.png"
  },
  {
    title: "Mad Tea Party",
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709449/Disney/Teacups_mo4dlp.png"
  },
  {
    title: "The Many Adventures of Winnie the Pooh",
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709443/Disney/Pooh_krttcx.png"
  },
  {
    title: "Seven Dwarfs Mine Train",
    land_id: 1,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709430/Disney/Mine_fminxc.png"
  },
  {
    title: "Tomorrowland Speedway",
    land_id: 2,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709447/Disney/Speedway_k7gmo4.png"
  },
  {
    title: "Space Mountain",
    land_id: 2,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709449/Disney/Spacemountain_ykfkcl.png"
  },
  {
    title: "Astro Orbiter",
    land_id: 2,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709419/Disney/Orbit_oogjea.png"
  },
  {
    title: "Tomorrowland Transit Authority PeopleMover",
    land_id: 2,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709436/Disney/Peoplemover_c3duhy.png"
  },
  {
    title: "Walt Disney's Carousel of Progress",
    land_id: 2,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709421/Disney/Carousel_klomxp.png"
  },
  {
    title: "Buzz Lightyear's Space Ranger Spin",
    land_id: 2,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635714657/Disney/Screen_Shot_2021-10-31_at_17.10.35_tc1ibt.png"
  },
  {
    title: "Monsters, Inc. Laugh Floor",
    land_id: 2,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709411/Disney/Laugh_vs7fm8.png"
  },
  {
    title: "The Hall of Presidents",
    land_id: 3,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709413/Disney/Hallofpresidents_ohhcht.png"
  },
  {
    title: "Liberty Square Riverboat",
    land_id: 3,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709413/Disney/Liberty_ccokom.png"
  },
  {
    title: "Haunted Mansion",
    land_id: 3,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709435/Disney/Haunted_h5ecuw.png"
  },
  {
    title: "Swiss Family Treehouse",
    land_id: 4,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709449/Disney/Treehouse_dpkpsa.png"
  },
  {
    title: "The Magic Carpets of Aladdin",
    land_id: 4,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709415/Disney/Aladdin_mljk2y.png"
  },
  {
    title: "Jungle Cruise",
    land_id: 4,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709419/Disney/Jungle_iwxqvq.png"
  },
  {
    title: "Walt Disney's Enchanted Tiki",
    land_id: 4,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709435/Disney/Tiki_n5zbdy.png"
  },
  {
    title: "Pirates of the Caribbean",
    land_id: 4,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709434/Disney/Pirates_mcxf5x.png"
  },
  {
    title: "Splash Mountain",
    land_id: 5,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709446/Disney/Splashmountain_xwgwsm.png"
  },
  {
    title: "Big Thunder Mountain Railroad",
    land_id: 5,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709425/Disney/Thundermountain_o0gud7.png"
  },
  {
    title: "Country Bear Jamboree",
    land_id: 5,
    image: "https://res.cloudinary.com/dndp5yqyt/image/upload/bo_40px_solid_black/w_600,h_400,r_10/v1635709455/Disney/Country_aifypg.png"
  },
];

const seedProducts = () => Ride.bulkCreate(ridesData);

module.exports = seedProducts;