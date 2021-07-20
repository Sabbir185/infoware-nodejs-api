// external imports
const express = require("express");

// internal imports
const { addAdmin } = require('../controllers/addAdmin');
const { addProduct } = require("../controllers/addProducts");
const { AdminValidator, AdminValidatorHelper } = require("../middlewares/admin/AdminValidators");
const avatarUpload = require("../middlewares/admin/avatarUpload");
const imageUpload = require("../middlewares/admin/productImageUpload");
const { productValidator, productValidatorHelper } = require("../middlewares/admin/productValidators");


// app initialization
const router = express.Router();


// create account for admin or staff
router.post("/addAccount", avatarUpload, AdminValidator, AdminValidatorHelper, addAdmin);

// add product
router.post('/addProducts', imageUpload, productValidator,productValidatorHelper, addProduct);


// module export
module.exports = router;
