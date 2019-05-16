const express = require("express");
const router = express.Router();

module.exports = db => {
  router.route("/").get((req, res, next) => {
    res.send("layers");
    next();
  });
  return router;
};
