// external imports
const express = require("express");

// internal import
const { getProducts } = require("../controllers/getProducts");

// app initialization
const router = express.Router();


// get all products
router.get("/", getProducts);


// module export
module.exports = router;
