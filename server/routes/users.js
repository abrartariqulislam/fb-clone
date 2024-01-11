// dependencies
const express = require("express");
const { register } = require("../controllers/users");
const { registerDataValidationRules, registerDataValidationResult } = require("../middlewares/validators");

// create route
const router = express.Router();

// route
router.post("/register", registerDataValidationRules, registerDataValidationResult, register);

module.exports = router;
