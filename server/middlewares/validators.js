const { check } = require("express-validator");

exports.registerDataValidationRules = [
  // full name
  check("first_name")
  .trim()
  .escape()
  .notEmpty()
  .withMessage("First name is required")
  .isLength({min:1, max:30})
  .withMessage("First name should be between 1 to 30 characters"),

  // last name
  check("last_name")
  .trim()
  .escape()
  .notEmpty()
  .withMessage("Last name is required")
  .isLength({min:1, max:30})
  .withMessage("Last name should be between 1 to 30 characters"),

  // email
  check("email")
  .trim()
  .escape()
  .notEmpty()
  .withMessage("Email is required")
  .isLength({max:50})
  .withMessage("Email should be 50 characters")
  .isEmail()
  .withMessage("Email is invalid"),
];
