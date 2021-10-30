const router = require('express').Router();
const userR = require('./userRoutes');
const postR = require('./post');
const rideR = require('./ride')
const loginR = require('./login')
const landR = require('./land')

router.use('/users', userR);
router.use('/post', postR);
router.use('/ride', rideR);
router.use('land', landR)
router.use('/login', loginR);

module.exports = router