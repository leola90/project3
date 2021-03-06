const router = require("express").Router();
const Post = require ("../../models/Post");

//@route GET api/user
router.get('/', (req,res) => {
  Post.find()
    .sort({ date: -1})
    .then(posts => res.json(posts))
})

//@route POST api
router.post('/', (req,res) => {
  const newPost = new Post({
    name: req.body.name,
    description: req.body.description,
    gender: req.body.gender,
    status: req.body.status,
    image: req.body.image
  });

  newPost.save().then(post => res.json(post));
})

//@route DELETE api/user
router.delete('/:id', (req,res) => {
  Post.findById(req.params.id)
  .then(post => post.remove().then(() => res.json({ success: true })))
  .catch(err => res.status(404).json({ success: false}));
})

module.exports = router;