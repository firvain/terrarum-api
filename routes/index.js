const express = require("express");
const router = express.Router();

const v1 = require("./v1");
module.exports = db => {
  router.use("/v1", v1(db));
  return router;
};
