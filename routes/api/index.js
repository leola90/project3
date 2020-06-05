const router = require("express").Router();
const userRoutes = require("./users");

// Post routes
router.use("/user", userRoutes);

module.exports = router;
