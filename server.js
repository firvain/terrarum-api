/* eslint-disable no-console */
const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "dist")));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log("Listening on port 3000"));
