const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
});

  // router.get('/user', async (req, res) => {
  //   try {
  //     // Find the logged in user based on the session ID
  //     const userData = await User.findByPk(req.session.user_id, {
  //       attributes: { exclude: ['password'] },
  //   //     include: [{ model: Ride }],
  //     });
  
  //     const user = userData.get({ plain: true });
  
  //     res.render('user', {
  //       ...user,
  //       // logged_in: true
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

  // router.get('/profile', withAuth, async (req, res) => {
  //   try {
  //     // Find the logged in user based on the session ID
  //     const userData = await User.findByPk(req.session.user_id, {
  //       attributes: { exclude: ['password'] },
  //       include: [{ model: Project }],
  //     });
  
  //     const user = userData.get({ plain: true });
  
  //     res.render('profile', {
  //       ...user,
  //       logged_in: true
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });


router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    console.log(req)
    const user = req.body
       res.render('login', user);
});

// router.get('/signup', (req, res) => {
//     if(req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('signup');
// });

module.exports = router;