const uploader = require('../../utilities/singleFileUpload');

function imageUpload(req, res, next) {
    const upload = uploader(
        'users',
        ['image/jpeg', 'image/jpg', 'image/png'],
        5000000,
        'Only .png .jpg $ .jpeg files are allowed'
    );

    // call the middleware function
    upload.any()(req, res, (err) => {
        if (err) {
            res.status(500).json({
                errors: {
                    avatar: {
                        msg: err.message
                    }
                }
            })
        } else {
            next();
        }
    })
}


module.exports = imageUpload;