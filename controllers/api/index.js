const router = require('express').Router();
const userR = require('./userRoutes');
const postR = require('./post');
const rideR = require('./ride')
const landR = require('/land');

router.use('/users', userR);
router.use('/post', postR);
router.use('/ride', rideR);
router.use('/land', landR);

module.exports = router