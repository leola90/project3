const router = require("express").Router();
const passport = require("../../passport");
const User = require ("../../models/Users");

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.delete('/:id', (req,res) => {
  User.findById(req.params.id)
  .then(user => user.remove().then(() => res.json({ success: true })))
  .catch(err => res.status(404).json({ success: false}));
})


//Post route for signup
router.post('/signup', (req, res, next) => {
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

      return res.json({
        message: "user is now authenicated"
      });
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
