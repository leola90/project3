const passport = require("passport");


const LoginStrategy = require("./LoginStrategy");
const SignupStrategy = require("./SignupStrategy");

passport.use("login", LoginStrategy);
passport.use("signup", SignupStrategy);


module.exports = passport;