const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require('morgan');

const passport = require("./passport");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/api/users");

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/petfinderdb")
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use("/", indexRouter);
app.use("/auth", usersRouter);
app.use(passport.initialize());
// app.use(passport.session());


const PORT = process.env.PORT || 5000;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

