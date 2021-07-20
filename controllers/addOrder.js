
// model import
const Order = require('../models/Order');

// add order
async function addOrder(req, res, next) {
    let newOrder = new Order({...req.body});
    // save order or send error
    try {
        const result = await newOrder.save();
        res.status(200).json({
            message: 'Order successfully done!'
        })
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: 'Order failed!'
                }
            }
        })
    }

}


// get all order
const allOrder = async (req, res, next) => {
    const result = await Order.find({}).populate('user', 'name email mobile');
    res.status(200).json({
        orderList: result
    })
}

// find specific user order
const oneUserAllOrder = async (req, res, next) => {
    const resultOneUser = await Order.find({ user : req.params.id});
    res.status(200).json({
        orderList: resultOneUser
    })
}


// module export
module.exports = {
    addOrder,
    allOrder,
    oneUserAllOrder
}