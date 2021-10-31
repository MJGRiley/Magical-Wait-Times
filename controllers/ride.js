const router = require('express').Router();
const { Lands, Ride, Post } = require('../models');

router.get('/ride/:land/:ride', async (req, res) => {
    try {
        const rideData = await Ride.findOne({
            where: {
                id: req.params.ride
            }
        })
        const ride = await rideData.get({
            plain: true
        });
        console.log(rideData)
       res.render('ride', ride)
    }catch (err) {
     res.redirect('/map');
    }
})

module.exports = router;