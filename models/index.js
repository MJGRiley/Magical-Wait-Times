const User = require('./user');
const Post = require('./post');
const Ride = require('./ride');
const Lands = require('./lands');

Ride.hasMany(Post, {
    foreignKey: 'ride_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(Ride, {
    foreignKey: 'ride_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasOne(User, {
    foreignKey: 'post_id'
});

Post.hasOne(Ride, {
    foreignKey: 'post_id'
});

Lands.hasMany(Ride, {
    foreignKey: 'land_id',
    onDelete: 'CASCADE'
});

Ride.belongsTo(Lands, {
    foreignKey: 'land_id'
});

module.exports = {
    User,
    Post,
    Lands,
    Ride,
  };
  



