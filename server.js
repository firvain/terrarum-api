/* eslint-disable no-console */
const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
app.use(morgan("dev"));
app.use(express.static(join(__dirname, "dist")));
app.get("/", (req, res) => res.send(env));
app.listen(port, () => console.log(`Listening on port ${port}`));
