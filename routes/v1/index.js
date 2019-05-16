const express = require("express");
const router = express.Router();

const users = require("../../controllers/v1/users");
const layers = require("../../controllers/v1/layers");

module.exports = db => {
  router.use("/users", users(db));
  router.use("/layers", layers(db));
  // console.log(db);
  return router;
};
