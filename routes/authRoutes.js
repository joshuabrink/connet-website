var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware/middleware"),
  config = require("../lib/config.js");

var Recaptcha = require("express-recaptcha").RecaptchaV3;
//import Recaptcha from 'express-recaptcha'
var options = { theme: "light" };
var recaptcha = new Recaptcha(
  process.env.RECAPTCHA_SITE_KEY,
  process.env.RECAPTCHA_SECRET,
  options
);

//========AUTH ROUTES========

// app.post("/register", function(req, res) {
//     var newUser = new User({username: req.body.username, email: req.body.email});
//     User.register(newUser, req.body.password, function(err, user) {
//         if(err) {
//             console.log("error", err.message);
//         }
//         passport.authenticate("local")(req, res, function() {
//             res.redirect("/");
//         })
//     })
// })

// app.post("/login",passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/",
//   failureFlash: 'Invalid username or password.',
//   successFlash: 'Welcome!'

// }), function(req, res) {
//     res.json({ id: req.user.id, username: req.user.username });
// });

router.get("/login", function (req, res) {
  res.render("login", { page: "login" });
});

router.post("/login", recaptcha.middleware.verify, function (req, res, next) {
  if (!req.recaptcha.error) {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.render("home", { toast: "fail", page: "home" });
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.render("home", { toast: "pass", page: "home" });
      });
    })(req, res, next);
  } else {
    res.render("home", { toast: "captchaFail", page: "home" });
  }
});

router.get("/logout", middleware.isLoggedIn, function (req, res) {
  req.logout();
  res.redirect("back", { toast: "loggedout" });
});

module.exports = router;
