const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const homeController = require("../controllers/home")
const postsController = require("../controllers/posts")
const { ensureAuth, ensureGuest} = require("../middleware/auth")

// Main Routes
router.get("/", homeController.getIndex);
// Teacher Profile
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/profileStudents", ensureAuth, postsController.getProfileStudents);
router.get("/profile/:id", ensureAuth, postsController.getProfileOthers)
// Add Friend
router.put("/profile/addfriend/:id", postsController.addFriend)
// Feed
router.get("/feed", ensureAuth, postsController.getFeed);
// Login Teacher
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
// Login Students
router.get("/loginStudent", authController.getLoginStudent);
router.post("/loginStudent", authController.postLoginStudent);
// Signup Page Option Teacher or Student
router.get("/signup", authController.getSignup);
// Signup Teacher
router.get("/signupTeacher", authController.getSignupTeacher);
router.post("/signupTeacher", authController.postSignupTeacher);
// Signup Student
router.get("/signupStudent", authController.getSignupStudent);
router.post("/signupStudent", authController.postSignupStudent);
// Logout
router.get("/logout", authController.logout);

module.exports = router;