const router = require('express').Router();
const { Lands, Ride, Post } = require('../models');

router.get('/ride/:land/:id', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                ride_id: req.params.id
            }
        })
        const rideData = await Ride.findOne({
            where: {
                id: req.params.id
            }
        })
        const posts = await postData.map((temp) => temp.get({ plain: true }))
        const ride = await rideData.get({
            plain: true
        });
        res.render('ride', {ride, posts})
        }catch (err) {
     res.redirect('/map');
    }
})

module.exports = router;