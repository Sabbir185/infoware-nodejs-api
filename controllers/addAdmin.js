const bcrypt = require('bcrypt');

// model import
const Admin = require('../models/Admin');

// add user
async function addAdmin(req, res, next) {
    let newAdmin;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    if (req.files && req.files.length > 0) {

        newAdmin = new Admin({
            ...req.body,
            avatar: req.files[0].filename,
            password: hashedPassword
        })
    } else {
        newAdmin = new Admin({
            ...req.body,
            password: hashedPassword
        })
    }

    // save user or send error
    try {
        const result = newAdmin.save();
        res.status(200).json({
            message: 'User was created successfully!'
        })
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: 'Unknown error occurred!'
                }
            }
        })
    }

}


module.exports = {
    addAdmin
}