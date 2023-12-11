// dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// app initialize
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());

// configuring cors with dynamic origin
const whitelist = ["http://localhost:3000", "http://localhost:3303"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// routes
app.get("/", (req, res) => {
  console.log("called");
  res.send({
    name:"Tariqul Islam added from server"
  })
});



// connect mongoose
mongoose.connect(process.env.DB_URI).then(() => {
  console.log("Connected mongoDB database");
});

// connect server
app.listen(port, () =>
  console.log(`server is running @http://localhost:${port} `)
);
