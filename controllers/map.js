const router = require('express').Router();
const { Lands, Ride } = require('../models');

router.get('/land/:id',  async (req, res) => {
    let temp = ""
    switch (req.params.id) {
        case "fantasyland" : temp = 1 
        break;
        case "tomorrowland": temp = 2
        break;
        case "libertysquare": temp = 3
        break;
        case "adventureland": temp = 4
        break;
        case "frontierland": temp = 5
        break;
    }
    try {
        const rideData = await Ride.findAll({
            where: {
                land_id: temp
            },
        })
        const rides =  rideData.map((temp) => temp.get({ plain: true }))
        const landsData = await Lands.findOne({
            where: {
                id: temp
            },
            });
            if (landsData) {
                const lands = await landsData.get({ plain: true });
                console.log(lands.id)
                console.log("this for lands" + lands.title);
        console.log()
        res.render('land', {lands, rides,})
      } else {
          res.status(404).end();
      }
    } catch (err) {
      res.redirect('/map');
    }
  });

module.exports = router;