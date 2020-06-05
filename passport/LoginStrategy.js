const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/Users");

const salt = bcrypt.genSaltSync(10);

const LoginStrategy = new Strategy({ usernameField: "email"}, function (email, password, done) {

    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return done(err, null);
        }

        if (!user) {
            return done("No user found", null);
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if(!isPasswordValid) {
            return done("Invalid Credentials", null);
        }

        return done(null, user);
    });
});


module.exports = LoginStrategy;