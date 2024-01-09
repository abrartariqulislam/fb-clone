const createHttpError = require("http-errors");

// users controller
exports.register = (req, res, next) => {
  try {
    console.log(req.body);
    res.send("register");
  } catch (error) {
    next(createHttpError(error));
  }
};
