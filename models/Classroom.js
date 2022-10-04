
const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true},
    
  teacherid: String,
  
  students: [{type: mongoose.Schema.Types.ObjectId,
  ref: "User"}],
  
});


module.exports = mongoose.model("Classroom", ClassroomSchema);
