const { check, validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');

// simple validation process
const productValidator = [
    check('productName')
        .isLength({ min: 3 })
        .withMessage('Name is required')
        .isAlpha('en-US', { ignore: ' -' })
        .withMessage('Name must not container anything other than Alphabet')
        .trim(),
    check('description')
        .isLength({ min: 5 })
        .withMessage('Invalid description minimum 5 character')
        .trim(),
    check('price')
        .isLength({ min: 1 })
        .withMessage('minimum character 1'),
];


const productValidatorHelper = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        // remove uploaded file, if error
        if (req.files.length > 0) {
            const { filename } = req.files[0];
            fs.unlink(path.join(__dirname), `../../public/products/${filename}`, (err) => {
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
    productValidator,
    productValidatorHelper,
}