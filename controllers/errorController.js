/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

