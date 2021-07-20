const { check, validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');

// simple validation process
const AdminValidator = [
    check('name')
        .isLength({ min: 3 })
        .withMessage('Name is required')
        .isAlpha('en-US', { ignore: ' -' })
        .withMessage('Name must not container anything other than Alphabet')
        .trim(),
    check('email')
        .isEmail()
        .withMessage('Invalid email address')
        .trim(),
    check('mobile')
        .isLength({min: 5})
        .withMessage('Invalid mobile number, minimum character 5'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters'),
];


const AdminValidatorHelper = (req, res, next)=> {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        // remove uploaded file
        if (req.files.length > 0) {
            const { filename } = req.files[0];
            fs.unlink(path.join(__dirname), `../../public/uploads/${filename}`, (err) => {
                if (err) {
                    console.log(err)
                }
            })
        }

        res.status(500).json({
            errors: mappedErrors
        })
    }
}

// module export
module.exports = {
    AdminValidator,
    AdminValidatorHelper,
}