/* eslint-disable no-console */
const express = require("express");
require("dotenv-flow").config();

const compression = require("compression");
// const { join } = require("path");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
const routes = require("./routes");
app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
// parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./dbs");
const asyncMiddleware = require("./helpers");
// MongoClient.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true })
//   .then(function(db) {
//     // <- db as first argument
//     console.log(db);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
app.use(compression());
app.get("/", (req, res) => res.send(env));
app.get(
  "/create",
  asyncMiddleware(async (req, res) => {
    try {
      await db();

      res.send("connected");
    } catch (error) {
      console.log(error.message);
      res.send(error.message);
    }
  })
);
app.use("/api", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
