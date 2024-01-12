const createHttpError = require("http-errors");
const bcrypt = require("bcrypt")

// users controller
exports.register = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      gender,
      birth_year,
      birth_month,
      birth_day,
    } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 12)
    const username = await createUsername(first_name + last_name)
    res.send("register");
  } catch (error) {
    next(createHttpError(error));
  }
};
