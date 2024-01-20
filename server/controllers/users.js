const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");
const { validateUsername, generateToken } = require("../utils/helpers");
const Users = require("../models/Users");
const { generateEmailTemplate } = require("../utils/emailTemplate");
const { mailer } = require("../utils/mailer");

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

    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );
    const authToken = generateToken({ id: user._id.toString() }, "7d");

    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    const html = generateEmailTemplate(user.username, url);

    user.password = undefined;

    res.status(201).send({
      massage: "Registration was successfully ",
      user,
      token: authToken,
    });

    const emailData = {
      subject: `Facebook email verification - ${new Date().toDateString()} `,
      html: html,
      attachments: [],
    };

    await mailer([user.email], emailData);
  } catch (error) {
    next(createHttpError(error));
  }
};
