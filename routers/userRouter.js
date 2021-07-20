// external imports
const express = require("express");

// internal import
const { addUser } = require("../controllers/addUser");
const imageUpload = require("../middlewares/user/imageUpload");
const { userValidator, userValidatorHelper } = require("../middlewares/user/userValidators");

// app initialization
const router = express.Router();


// create account for user
router.post("/", imageUpload, userValidator, userValidatorHelper, addUser);


// module export
module.exports = router;
