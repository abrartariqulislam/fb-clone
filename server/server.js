// dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();

// app initialize
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// configuring cors with dynamic origin
const whitelist = ["http://localhost:3000", "http://localhost:3303"];

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: "Not allowed by CORS" };
  }
  callback(null, corsOptions);
};

const corsOption =
  process.env.NODE_ENV === "development" ? null : corsOptionsDelegate;
app.use(cors(corsOption));

// routes
fs.readdirSync("./routes").map((routeFile) => {
  app.use("/api/v1", require(`./routes/${routeFile}`));
});

// connect mongoose
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected mongoDB database");
  })
  .catch((err) => console.log("Error to connected mongoDB"));

// connect server
const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`server is running @http://localhost:${port} `)
);
