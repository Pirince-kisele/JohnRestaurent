const express = require("express");
const path = require("path");
const router = express.Router();
const pagesControllers = require("../controllers/pagesControllers");



router.get("/", pagesControllers.gethome);
router.get("/about", pagesControllers.getAbout);
router.get("/contact", pagesControllers.getContact);
router.get("/menu", pagesControllers.getMenu);
router.get("/reservation", pagesControllers.getReservation);
router.get("/gallary", pagesControllers.getGallary);
router.post("/gallarys/new", pagesControllers.postGallarysNew);
module.exports = router;
