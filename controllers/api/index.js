const router = require('express').Router();
const userR = require('./userRoutes');
const postR = require('./post');
const rideR = require('./ride')

router.use('/users', userR);
router.use('/post', postR);
router.use('/ride', rideR);

module.exports = router