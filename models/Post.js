const mongoose = require("mongoose");
const User = require("./User");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  userName:{
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  classroomId:{
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// module.exports = mongoose.model("Post") this is where the mongoDB collection comes form
// You can add a third parameter for collection name. ("Post",PostSchema,"collection-name")
module.exports = mongoose.model("Post", PostSchema);
