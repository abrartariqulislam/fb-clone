// dependencies
const express = require("express");
const { register } = require("../controllers/users");
const { registerDataValidationRules } = require("../middlewares/validators");

// create route
const router = express.Router();

// route
router.post("/register", registerDataValidationRules, register);

module.exports = router;
