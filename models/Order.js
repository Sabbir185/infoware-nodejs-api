const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
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
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model('Order', OrderSchema);


module.exports = Order;