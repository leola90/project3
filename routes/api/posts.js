const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router
  .route("/posts")
  .get(postsController.findAll)
  .post(postsController.create);
  console.log("second checkpoint")

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;
