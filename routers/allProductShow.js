// external imports
const express = require("express");
const { getProducts } = require("../controllers/getProducts");

// app initialization
const router = express.Router();


// create account for admin or staff
router.get("/", getProducts);


// module export
module.exports = router;
