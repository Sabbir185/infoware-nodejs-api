// external imports
const express = require("express");

// internal import
const { addUser } = require("../controllers/addUser");
const { login } = require("../controllers/loginUser");
const imageUpload = require("../middlewares/user/imageUpload");
const { userValidator, userValidatorHelper } = require("../middlewares/user/userValidators");

// app initialization
const router = express.Router();


// create account for user
router.post("/", imageUpload, userValidator, userValidatorHelper, addUser);


// user login
router.post("/login", login);


// module export
module.exports = router;
