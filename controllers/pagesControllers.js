const items = require("../data/items")
module.exports.gethome = (req, res) =>{
  res.render("pages/index", {
    title: "Home pages",
    name: "David",
  });
}
module.exports.getContact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact page",
   
  });
}
module.exports.getAbout = (req, res) =>{
  res.render("pages/about", {
    title: "About page",
    name: "David",
  });
}
module.exports.getMenu = (req, res) =>{
  res.render("pages/menu", {
    title: "Menu page",
     items: items,
  });
}

module.exports.getGallary = (req, res) =>{
  res.render("pages/gallary", {
    title: "Gallary page",
    name: "David",
  });
}

