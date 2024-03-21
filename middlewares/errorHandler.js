const errorHandler = (err, req, res, next) => {
    if (err.name === "ErrorNotFound") {
        res.json({
            status: 404,
            name: "Error Not Found",
            message: err.message
        })
    }
}

module.exports = errorHandler;