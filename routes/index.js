const express = require('express');
const router = express.Router();
const PostModel = require('../models/post')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('React-blog').status(200)
});

router.get("/all", async (req, res) => {
    const posts = await PostModel.getAllPost()
    res.json(posts).status(200);
})

router.get("/:id?", async (req, res) => {
  const userPost = await PostModel.getById(1)
  res.json(userPost).status(200);
})

module.exports = router;
