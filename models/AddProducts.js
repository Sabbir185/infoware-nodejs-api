const mongoose = require('mongoose');

const AddProductSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const AddProducts = mongoose.model('AddProducts', AddProductSchema);


module.exports = AddProducts;