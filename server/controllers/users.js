const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");
const { validateUsername } = require("../utils/helpers");
const Users = require("../models/Users");

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
    const encryptedPassword = await bcrypt.hash(password, 12);
    const username = await validateUsername(first_name + last_name);

    const user = await Users({
      first_name,
      last_name,
      email,
      username,
      password: encryptedPassword,
      gender,
      birth_year,
      birth_month,
      birth_day,
    }).save();

    user.password = undefined;

    res.status(201).send({
      massage: "Registration was successfully ",
      user,
    });
  } catch (error) {
    next(createHttpError(error));
  }
};
