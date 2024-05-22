const express = require("express");
const path = require("path");
const ejs = require("ejs");
const pagesRouters = require("./route/pagesRouters");

const app = new express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use(pagesRouters);

app.listen(port, () => {
  console.log("server is running on port", port);
});
