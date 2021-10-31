// const router = require('express').Router();
// // const { User } = require('../models');

// router.get('/', async (req, res) => {
//     try {
//       res.render('homepage', {
//      logged_in: req.session.logged_in 
//           });  
     
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });


//   // router.get('/user', async (req, res) => {
//   //   try {
//   //     // Find the logged in user based on the session ID
//   //     const userData = await User.findByPk(req.session.user_id, {
//   //       attributes: { exclude: ['password'] },
//   //   //     include: [{ model: Ride }],
//   //     });

//  // router.get('/land', async (req, res) => {
//  //   try {
//  //     // Find the logged in user based on the session ID
//  //     const userData = await User.findByPk(req.session.user_id, {
//  //       attributes: { exclude: ['password'] },
//  //   //     include: [{ model: Ride }],
//  //     });
  
//   //     const user = userData.get({ plain: true });
  
//   //     res.render('user', {
//   //       ...user,
//   //       // logged_in: true
//   //     });
//   //   } catch (err) {
//   //     res.status(500).json(err);
//   //   }
//   // });

//   // router.get('/profile', withAuth, async (req, res) => {
//   //   try {
//   //     // Find the logged in user based on the session ID
//   //     const userData = await User.findByPk(req.session.user_id, {
//   //       attributes: { exclude: ['password'] },
//   //       include: [{ model: Project }],
//   //     });
  
//   //     const user = userData.get({ plain: true });
  
//   //     res.render('profile', {
//   //       ...user,
//   //       logged_in: true
//   //     });
//   //   } catch (err) {
//   //     res.status(500).json(err);
//   //   }
//   // });

// router.get('/login', (req, res) => {
//     if(req.session.loggedIn) {
//         res.redirect('/login');
//         return;
//     }
//     //console.log(req.session.user_id)
//     //const userData = await User.findOne({ where: { id: req.session.user_id } })
//     //console.log(userData)
//     // const user = req.body
//     // (console.log("homeRoutes " + user))
//        res.render('login');
// });

// // router.get('/login/signup', (req, res) => {
// //     if(req.session.loggedIn) {
// //         res.redirect('/');
// //         return;
// //     }

// //     res.render('login');
// // });

// module.exports = router;