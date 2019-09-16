const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const HOST = process.env.HOST;

mongoose.connect(`mongodb://${HOST}:27017/nodeapi`, {
  useNewUrlParser: true
});

requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3001);
