var express = require("express");
var router = express.Router();
var middleware = require("../middleware/middleware"),
  Mail = require("../lib/Mail"),
  config = require("../lib/config.js"),
  Brand = require("../models/brand");

var Recaptcha = require("express-recaptcha").RecaptchaV3;
//import Recaptcha from 'express-recaptcha'
var options = { theme: "light", callback: "function(){ return true; }" };
var recaptcha = new Recaptcha(
  process.env.RECAPTCHA_SITE_KEY,
  process.env.RECAPTCHA_SECRET,
  options
);

router.get("/", function (req, res) {
  Brand.find()
    .limit(5)
    .exec(function (err, brands) {
      if (err) {
        return err;
      }
      res.render("home", { brands: brands, page: "home", toast: "none" });
    });
});
router.get("/about", function (req, res) {
  res.render("about", { page: "about", toast: "none" });
});
router.get("/contact", function (req, res) {
  res.render("contact", { page: "contact", toast: "none" });
});

router.post(
  "/email",
  recaptcha.middleware.verify,
  middleware.isLoggedIn,
  function (req, res) {
    if (!req.recaptcha.error) {
      var mailContent = req.body.mail;

      Mail.createConnection();
      Mail.sendMessage("Option", "Random");
      res.redirect("back");
    } else {
      console.log(req.recaptcha.error);
    }
  }
);

module.exports = router;
