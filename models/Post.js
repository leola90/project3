 const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({

  name: { type: String},
  description: { type: String},
  image: { type: String},
  gender: { type: String},
  status: { type: String},
  date: { type: Date, default: Date.now },
  post: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
