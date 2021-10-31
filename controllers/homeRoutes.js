const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      res.render('homepage', {
     logged_in: req.session.logged_in 
          });  
     
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/map', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/map');
        return;
    }
       res.render('map');
});


module.exports = router;