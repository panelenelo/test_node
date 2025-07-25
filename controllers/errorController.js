/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

const httpStatus = require("http-status-codes");

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    //res.send(`${errorCode} | The page does not exist!`);
    res.sendFile(`./public/${errorCode}.html`, {
        root: "./"
    });
};

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};

exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

