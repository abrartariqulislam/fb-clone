const { check, validationResult } = require("express-validator");
const {
  validateBirthYear,
  validateBirthMonth,
  validateBirthDay,
} = require("../utils/helpers");

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
    .custom((birth_year) => {
      return validateBirthYear(birth_year);
    })
    .withMessage("Invalid birth year!"),

  // birth_month
  check("birth_month")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Birth month is required!")
    .custom((birth_month) => {
      return validateBirthMonth(birth_month);
    })
    .withMessage("Invalid birth month!"),

  // birth_day
  check("birth_day")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Birth day is required!")
    .custom((birth_day, { req }) => {
      const { birth_year, birth_month } = req.body;
      return validateBirthDay(birth_year, birth_month, birth_day);
    })
    .withMessage("Invalid birth day!"),

  // gender
  check("gender")
    .notEmpty()
    .withMessage("Gender is required!")
    .custom((gender) => {
      const genders = ["male", "female", "others"];
      if (genders.includes(gender)) {
        return true;
      }
      return false;
    })
    .withMessage("Invalid gender"),
];


exports.registerDataValidationResult = (req, res, next)=>{
  const errors = validationResult(req)
  if(errors.isEmpty()) {
    next()
  }else{
    const errorEntries = Object.entries(errors.mapped())
    const formattedErrors = errorEntries.map(([key, value])=>{
      return {[key]: value.msg}
    })
    res.send(formattedErrors)
  }
}
