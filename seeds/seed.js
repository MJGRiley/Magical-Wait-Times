const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedLands = require('./lands-seeds');
const seedRides = require('./rides-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedLands();
  console.log('\n----- LANDS SEEDED -----\n');

  await seedRides();
  console.log('\n----- RIDES SEEDED -----\n');

  process.exit(0);
};

seedAll();
