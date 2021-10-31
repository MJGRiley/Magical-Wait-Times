const router = require('express').Router();

router.post('/signup', async (req, res) => {
    try {
        console.log('api/login signup start')
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
        });
        const user = userData.username
        console.log(user)
        res.render('login', {
            user
        })

    } catch (err) {
        console.log('error')
      res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
      const validPassword = await userData.checkPassword(req.body.password);
      console.log('api/login ' + validPassword)
      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        //res.json({ user: userData, message: 'You are now logged in!' }); //this will break the app
      });
      const user = res.body.username;
      console.log('api/login ' + user)
      res.render('login', user)
    } catch (err) {
      res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => { // not yet functional
      if (req.session.logged_in) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
});
    
    module.exports = router;