// external import
const bcrypt = require('bcrypt');
const createError = require('http-errors');

// internal import
const User = require('../models/Users');


// login process controller
const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            $or: [{ email: req.body.username }, { mobile: req.body.username }],
        });

        if (user && user._id) {
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);

            if (isValidPassword) {

                // response user 
                res.status(200).json({
                    msg: 'User login successful',
                    user: {
                        name: user.name,
                        email: user.email,
                        mobile: user.mobile,
                        image: user.avatar
                    }
                })

            } else {
                throw createError('Login failed! Please try again');
            };

        } else {
            throw createError('Login failed! Please try again');
        };

    } catch (err) {
        res.status(400).json(
            {
                error: err.message
            }
        )
    };
}



// export module
module.exports = {
    login,
}