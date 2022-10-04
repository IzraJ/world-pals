const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const classroomController = require("../controllers/classroom");
const authController = require("../controllers/auth")
const { ensureAuth, ensureGuest } = require("../middleware/auth");




// Classroom Dashboard
router.get("/", classroomController.getClassroom);
// Classroom Create
router.post('/create',classroomController.createClassroom);
// Classroom Profile
router.get("/:id",ensureAuth,classroomController.getClassroomProfile)
// Classroom SignUp Student
router.get("/:id/signupStudent",ensureAuth, authController.getSignupStudent)

module.exports = router;