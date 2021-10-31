const router = require('express').Router();

// const home = require('./home');
const map = require('./map');
// const land = require('./land');
const ride = require('./ride');
//const ride = require('./ride');
const login = require('./login');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/', home);
router.use('/', map);
// router.use('/', land);
router.use('/', ride);

module.exports = router;// router.use('/', ride);
router.use('/', login);

module.exports = router;