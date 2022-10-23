const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const classroomController = require("../controllers/classroom");
const authController = require("../controllers/auth")
const { ensureAuth, ensureGuest } = require("../middleware/auth");





// Classroom Dashboard
router.get("/", classroomController.getClassroom);
// Classroom Create
router.post('/create',upload.single("file"), classroomController.createClassroom);
// Classroom Profile
router.get("/:id",ensureAuth,classroomController.getClassroomProfile)





// Classroom PUT updateClassroom
router.put("/:classid/addstudent/:id", classroomController.addStudent);

module.exports = router;
