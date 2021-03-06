const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");

// Post routes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
