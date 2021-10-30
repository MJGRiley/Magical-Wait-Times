const router = require('express').Router();
// const { User, Ride } = require('../../models');
// const withAuth = require('../../utils/auth');
const checkWaitTimes = require('../../utils/waitTime')

router.get('/:id', async (req, res) => {
    try {
        const tempId = req.id
        console.log(tempId)
        const temp = await checkWaitTimes(req.id)
        console.log(temp)
        res.render('land', temp)
    } catch (err) {
        res.status(500).json(err);
    }
})