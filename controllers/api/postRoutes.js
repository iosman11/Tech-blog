const router = require('express').Router();
const { Post, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id
        },
      });
      console.log(1)
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }

      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {
      const projectData = await Post.update(req.body, {
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
      }
      );
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/comment', withAuth, async (req, res) => {
    try {
      const newComment = await Comments.create({
        ...req.body,
        user_id: req.session.user_id,
    });
      res.status(200).json(newComment)
    } catch (err) {
      res.status(500).json(err)
    }
  });

module.exports = router