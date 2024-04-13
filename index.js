const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = new express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home pages",
    name: "David",
  });
});
app.get("/about", (req, res) => {
  res.render("pages/about", {
    title: "About page",
    name: "David",
  });
});
app.get("/contact", (req, res) => {
  res.render("pages/contact", {
    title: "Contact page",
    name: "David",
  });
});
app.get("/menu", (req, res) => {
  res.render("pages/menu", {
    title: "Menu page",
    name: "David",
  });
});

app.get("/reservation", (req, res) => {
  res.render("pages/reservation", {
    title: "Reservation page",
    name: "David",
  });
});
app.get("/gallary", (req, res) => {
  res.render("pages/gallary", {
    title: "Gallary page",
    name: "David",
  });
});
app.get("/gallarys/new", (req, res) => {
  res.render("pages/publish_pucture", {
    title: "publish page",
    name: "David",
  });
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
