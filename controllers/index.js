const router = require('express').Router();

const map = require('./map');
const ride = require('./ride');
const login = require('./login');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', map);
router.use('/', ride);
router.use('/', login);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;