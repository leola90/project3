const router = require("express").Router();
const passport = require("../../passport");
const postsController = require("../../controllers/postsController");

//Post route for signup
router.post("/signup", (req, res, next) => {
  passport.authenticate("signup", function(error, user, info){
    if (error) {
      return res.status(500).json({ 
        message: error || "oops, something happened",
      });
    }

    req.login(user, function( error) {
      if (error) {
        return res.status(500).json({ 
          message: error || "oops, something happened",
        });
      }

      return res.json(user);
    });
  })(req, res, next); 
});

//Post route for login
router.post("/login", function(req, res, next) {
  passport.authenticate("login", function(error, user, info){
    if (error) {
      return res.status(500).json({ 
        message: error || "oops, something happened",
      });
    }

    req.login(user, function( error) {
      if (error) {
        return res.status(500).json({ 
          message: error || "oops, something happened",
        });
      }

      return res.json(user);
    });
  })(req, res, next); 
});



module.exports = router;
