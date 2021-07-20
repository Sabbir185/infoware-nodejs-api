// external imports
const express = require("express");

// internal import
const { addOrder, allOrder, oneUserAllOrder } = require("../controllers/addOrder");

// app initialization
const router = express.Router();

// get all order
router.get('/', allOrder);

// order store
router.post("/", addOrder);

// specific user's all order list
router.get('/:id', oneUserAllOrder);


// module export
module.exports = router;
