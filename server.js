/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const compression = require("compression");
const { join } = require("path");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "local";

app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
MongoClient.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true })
  .then(function(db) {
    // <- db as first argument
    console.log(db);
  })
  .catch(function(err) {
    console.log(err);
  });
// parse application/json
app.use(bodyParser.json());
app.use(compression());
app.use(express.static(join(__dirname, "dist")));
app.get("/", (req, res) => res.send(env));
app.listen(port, () => console.log(`Listening on port ${port}`));
