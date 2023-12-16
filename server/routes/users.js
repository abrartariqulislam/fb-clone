// dependencies
const express = require("express");
const { usersAll } = require("../controllers/users");

// create route
const router = express.Router();

// route
router.get("/users", usersAll);

module.exports = router;
