// const router = require('express').Router();
// const { Lands } = require('../../models');
// // const { User, Ride } = require('../../models');
// // const withAuth = require('../../utils/auth');
// //const checkWaitTimes = require('../../utils/waitTime')

// // router.get('/:id', async (req, res) => {
// //     try {
// //         const tempId = req.id 
// //         console.log(tempId)
// //         //const temp = await checkWaitTimes(req.id)
// //         console.log(temp)
// //         res.render('land', temp)
// //     } catch (err) {
// //         res.status(500).json(err);
// //     }
// // })

// router.get('/:id', async (req, res) => {
//     try {
//       console.log('api/land')
//       const landData = await Lands.findByPk(req.params.id);
//     console.log('id' + landData)
//       // const lands = landData.get({ plain: true });
//       // Send over the 'loggedIn' session variable to the 'homepage' template
//       res.render('land', { lands, loggedIn: req.session.loggedIn });  //  
   
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

//   router.get('/', async (req, res) => {
//     res.render('land', {Lands});
//     console.log('line 36 apilands' + JSON.stringify({Lands}))
//   });

//   module.exports = router;