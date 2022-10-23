const cloudinary = require("../middleware/cloudinary");
const Classroom = require("../models/Classroom");
const User = require("../models/User");



module.exports = {

    getClassroom: async (req, res) => {
        try {
      const students = await User.find({teacherid: req.user.id})
      const classroom = await Classroom.find({teacherid: req.user.id})
      res.render("classroom.ejs",{ user: req.user, classroom: classroom, students: students})
      
        } catch (err) {
      console.log(err);
        }
    },


    createClassroom: async (req, res) => {
        try {
        
        const result = await cloudinary.uploader.upload(req.file.path);
          
        await Classroom.create({
         className: req.body.className,
         teacherid: req.user.id,
         image: result.secure_url,
         cloudinaryId: result.public_id,
        });
         console.log("Classroom Created");
         res.redirect("/classroom");
        } catch (err) {
        console.log(err);
        console.log(req)
        }
    },
  
  
    getClassroomProfile: async (req, res) => {
        try {
        const addedStudents = await User.find({classroomid:req.params.id})
        const classroom = await Classroom.find({_id: req.params.id})
        const students = await User.find({teacherid: req.user.id})
        const id = req.params.id
        res.render("classroomProfile.ejs",{ user: req.user, classroom: classroom, students: students, id: id, addedStudents: addedStudents})
        
        } catch (err) {
        console.log(err);
        }
    },

    addStudent: async (req,res) => {
      try{
      const classroom = req.params.classid
      const student = req.params.id
      const user = req.user.id
      console.log(user.id)
      console.log("Succesfully added new friend")
// 
      await Classroom.findOneAndUpdate(
      { _id: classroom }, 
      { classroomid: classroom },
      ) 
      await User.findOneAndUpdate(
        {_id: student},
        {}
      )  
      }catch(err){
        console.log(err);
      }
      res.redirect(`/classroom/${req.params.classid}`);
    },


}