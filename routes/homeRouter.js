const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index"));

// router.get("/about", (req, res) => res.render("home/about"));

// router.get("/courses", (req, res) => res.render("home/courses"));

// router.get("/contact", (req, res) => res.render("home/contact"));

module.exports = router;