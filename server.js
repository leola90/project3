const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require('morgan');
const passport = require("./passport");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/api/users");
const postsRouter = require("./routes/api/posts");
const cookieSession = require("cookie-session");


const app = express();

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/petfinderdb", {useNewUrlParser: true})
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

// app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/auth", usersRouter);
app.use("/api", postsRouter);


const PORT = process.env.PORT || 5000;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

