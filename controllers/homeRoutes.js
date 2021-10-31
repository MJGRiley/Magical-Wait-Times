const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
// missing withAuth
router.get('/', async (req, res) => {
    try {
      res.render('homepage', {
     logged_in: req.session.logged_in 
          });
    } catch (err) {
      res.status(500).json(err);
    }
});
// missing withAuth
router.get('/map', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/map');
        return;
    }
       res.render('map');
});

module.exports = router;