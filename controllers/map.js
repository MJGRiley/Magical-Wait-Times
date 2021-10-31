const router = require('express').Router();
const { Lands, Ride } = require('../models');
const returnRides  = require('../utils/waitTime')

router.get('/land/:id',  async (req, res) => {
    let temp = ""
    let tempA = []
    switch (req.params.id) {
        case "fantasyland" :  tempA = returnRides(req.params.id), temp = 1 
        break;
        case "tomorrowland": tempA = returnRides(req.params.id), temp = 2
        break;
        case "libertysquare": tempA = returnRides(req.params.id), temp = 3
        break;
        case "adventureland": tempA = returnRides(req.params.id), temp = 4
        break;
        case "frontierland": tempA =  returnRides(req.params.id), temp = 5
        break;
    }
    try {
        const rideData = await Ride.findAll({
            where: {
                land_id: temp
            },
        })
        const rides =  rideData.map((temp) => temp.get({ plain: true }))
        console.log("-----------")
        console.log(typeof rideData)
        console.log("-----------")
        console.log(typeof rides)
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
        res.render('land', {
           lands,
           rides,

        })
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('/map');
    }
  });

module.exports = router;