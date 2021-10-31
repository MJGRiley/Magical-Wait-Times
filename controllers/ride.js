const router = require('express').Router();
const { Lands, Ride, Post } = require('../models');

router.get('/ride/:land/:id', async (req, res) => {
    try {
        const rideData = await Ride.findOne({
            where: {
                id: req.params.id
            }
        })
        const ride = await rideData.get({
            plain: true
        });
        res.render('ride', {
            ride
        }  )
        }catch (err) {
     res.redirect('/map');
    }
})

module.exports = router;