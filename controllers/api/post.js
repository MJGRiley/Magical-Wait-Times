const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');
//TODO: using withAuth on the finish product
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
      user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll();
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
      console.log(req.params.id)
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
        }});
        res.status(200).json(postData);
        console.log('U did  it !')
    } catch(err) {
        console.log('u failed !')
      res.status(500).json(err);
    }
   
  });
  module.exports = router;
  