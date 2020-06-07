const passport = require("passport");
const User = require("../models/Users");

passport.serializeUser(function(user, done) {
    done(null, user.email);
});

passport.deserializeUser(function(email, done) {
    User.findOne({ email }).exec((err, user) => {
        done(err, user);
    });
});

const LoginStrategy = require("./LoginStrategy");
const SignupStrategy = require("./SignupStrategy");

passport.use("login", LoginStrategy);
passport.use("signup", SignupStrategy);


module.exports = passport;