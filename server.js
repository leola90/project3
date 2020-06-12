const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const passport = require("./passport");
const routes = require("./routes");
const logger = require("morgan");
const cookieSession = require("cookie-session");
const path = require("path");

const app = express();

// Bodyparse Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

// CookieSession
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))

// Passport Serialize and deserialize
app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/petdb")
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});