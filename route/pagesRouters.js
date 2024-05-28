const express = require("express");
const path = require("path");
const router = express.Router();
const pagesControllers = require("../controllers/pagesControllers");



router.get("/", pagesControllers.gethome);
router.get("/about", pagesControllers.getAbout);
router.get("/contact", pagesControllers.getContact);
router.get("/menu", pagesControllers.getMenu);
router.get("/gallary", pagesControllers.getGallary);
module.exports = router;
