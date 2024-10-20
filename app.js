//app.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  
};

const userController = require("./src/controllers/userController");
const cctvController = require("./src/controllers/cctvController");
const intrusionController = require("./src/controllers/intrusionController");
const cameraController = require("./src/controllers/cameraController");

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", userController);
app.use("/api/cctv", cctvController);
app.use("/api/intrusion", intrusionController);
app.use("/api/camera", cameraController);

app.get("/", (req, res) => {
  res.status(200).send("Server is working");
});

module.exports = app;
