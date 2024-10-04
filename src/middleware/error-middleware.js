const { ResponseError } = require('../error/response-error');

const errorMiddleware = (err, req, res, next) => {
    if (!err) {
        return next();
    }

    // Check if the error is an instance of ResponseError
    if (err instanceof ResponseError) {
        res.status(err.status).json({
            success: false,
            status: err.status,
            message: err.message
        }).end();
    } else {
        // Handle generic or unknown errors
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message || 'Internal Server Error'
        }).end();
    }
};

module.exports = { errorMiddleware };
