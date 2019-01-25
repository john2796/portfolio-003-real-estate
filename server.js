const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(logger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongoose successfully connected"))
  .catch(err => console.log(err));

const port = proccess.env.PORT || 5000;
app.listen(port, () => console.log("server running on port ${port}"));
