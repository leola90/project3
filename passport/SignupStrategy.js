const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy({ passReqToCallback: true}, function (req, username, password, done) {
    const email = req.body.email;

    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return done(err, null);
        }

        if (user) {
            return done("User already exist", null);
        }

        
        let newUser = new User({
            username,
            email,
            password: bcrypt.hashSync(password, salt)
            
        });

        newUser.save((error, inserted) => {
            if (error) {
                return done(error, null);
            }

            return done(null, inserted);
        });
    });
});


module.exports = SignupStrategy;