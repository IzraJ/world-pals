
const Classroom = require("../models/Classroom")
const User = require("../models/User")


module.exports = {

    getClassroom: async (req, res) => {
        try {
      const classroom = await Classroom.find({teacherid: req.user.id})
      res.render("classroom.ejs",{ user: req.user, classroom: classroom})
      
        } catch (err) {
      console.log(err);
        }
    },


    createClassroom: async (req, res) => {
        try {
        await Classroom.create({
         className: req.body.className,
         teacherid: req.user.id
        });
         console.log("Classroom Created");
         res.redirect("/classroom");
        } catch (err) {
        console.log(err);
        }
    },
  
  
    getClassroomProfile: async (req, res) => {
        try {
        
        const classroom = await Classroom.find({teacherid: req.user.id})
        const student = await User.find({classroomid: req.params.id})
        const id = req.params.id
        res.render("classroomProfile.ejs",{ user: req.user, classroom: classroom, student: student, id: id})
        
        } catch (err) {
        console.log(err);
        }
    },



}