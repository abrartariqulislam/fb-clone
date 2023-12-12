// dependencies
const express = require("express");

// create route
const router = express.Router();

// route
router.get("/users", (req, res) => {
  res.send("user route");
});

module.exports = router;
