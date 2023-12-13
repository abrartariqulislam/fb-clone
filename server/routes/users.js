// dependencies
const express = require("express");
const { users } = require("../controllers/users");

// create route
const router = express.Router();

// route
router.get("/users", users);

module.exports = router;
