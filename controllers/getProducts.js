// model
const Products = require('../models/AddProducts');

// get user page
async function getProducts(req, res, next) {
    try {
        const allProduct = await Products.find({});
        res.json({
            allProduct: allProduct,
        });

    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getProducts
}