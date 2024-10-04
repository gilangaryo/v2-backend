
const notFound = (req, res, next) => {
    console.log("API ROUTE Not Found");
    res.status(404).json({
        success: false,
        status: 404,
        message: 'Route not found'
    });
};

module.exports = { notFound };
