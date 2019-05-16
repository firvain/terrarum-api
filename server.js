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
const dbs = require("./dbs");
// const asyncMiddleware = require("./helpers");
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
async function initDB() {
  try {
    const db = await dbs();
    db.dropCollection("test");
    app.use("/api", routes(db));
    app.get("/api", (req, res) => {
      res.send("connected to database");
    });
  } catch (error) {
    app.get("/api", (req, res) => {
      res.send(error.message);
    });
    throw new Error(error.message);
  }
}
initDB()
  .then(app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(error => {
    console.error(error.message);
  });
