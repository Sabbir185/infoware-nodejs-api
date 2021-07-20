const bcrypt = require('bcrypt');

// model import
const AddProducts = require('../models/AddProducts');

// add user
async function addProduct(req, res, next) {
    let newProducts;

    if (req.files && req.files.length > 0) {

        newProducts = new AddProducts({
            ...req.body,
            image: req.files[0].filename,
        })
    } else {
        newProducts = new AddProducts({
            ...req.body,
        })
    }

    // save user or send error
    try {
        const result = await newProducts.save();
        res.status(200).json({
            message: 'Product was added successfully!'
        })
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: 'Failed to added!'
                }
            }
        })
    }

}


module.exports = {
    addProduct
}