const { check } = require("express-validator");
const { validateBirthYear, validateBirthMonth } = require("../utils/helpers");

exports.registerDataValidationRules = [
  // full name
  check("first_name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("First name is required!")
    .isLength({ min: 1, max: 30 })
    .withMessage("First name should be between 1 to 30 characters!"),

  // last name
  check("last_name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Last name is required!")
    .isLength({ min: 1, max: 30 })
    .withMessage("Last name should be between 1 to 30 characters!"),

  // email
  check("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Email is required!")
    .isLength({ max: 50 })
    .withMessage("Email should be maximums 50 characters!")
    .isEmail()
    .withMessage("Email is invalid!"),

  // password
  check("password")
    .notEmpty()
    .withMessage("Password is required!")
    .isStrongPassword()
    .withMessage("Password is not strong!"),

    // birth_year
    check("birth_year")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Birth year is required!")
    .custom((birthYear)=>{
      return validateBirthYear(birthYear)
    })
    .withMessage("Invalid birth year!"),

    // birth_month
    check("birth_month")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Birth month is required!")
    .custom((birthMonth)=>{
      return validateBirthMonth(birthMonth)
    })
    .withMessage("Invalid birth month!"),
];
