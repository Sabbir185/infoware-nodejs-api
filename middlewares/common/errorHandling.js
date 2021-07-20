// http-error package
const createError = require('http-errors');

// page not found error
function notFoundError(req, res, next) {
    next(createError(404, 'Your requested content was not found!'))
}

// default error
function errorHandler(err, req, res, next) {
    const errors = process.env.NODE_ENV === 'development' ? err : { message: err.message };

    res.status(err.status || 500).json({error: errors.message, stack: errors.stack});

}

// module export
module.exports = {
    notFoundError,
    errorHandler,
}