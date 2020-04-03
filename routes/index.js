var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('React-blog').status(200)
});

router.get("/all", async (req, res) => {
    const posts = await PostModel.getAllPost()
    res.json(posts).status(200);
})

router.get("/:id?", async (req, res) => {
  const userPost = await PostModel.getById()
  res.json(userPost).status(200);
})

module.exports = router;
