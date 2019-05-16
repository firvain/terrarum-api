const express = require("express");
const router = express.Router();

const users = require("../../controllers/v1/users");
const layers = require("../../controllers/v1/layers");
router.use("/users", users);
router.use("/layers", layers);

module.exports = router;
