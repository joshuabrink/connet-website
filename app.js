var express = require("express"),
  helmet = require("helmet"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  session = require("express-session"),
  MongoStore = require("connect-mongo")(session),
  app = express(),
  config = require("./lib/config.js");
const fs = require("fs");

mongoose.Promise = Promise;
require("dotenv").config();



//Models
var User = require("./models/user"),
  Product = require("./models/product"),
  Brand = require("./models/brand"),
  //Libraries
  Cart = require("./lib/Cart"),
  Security = require("./lib/Security"),
  UpdateProducts = require("./lib/UpdateProducts"),
  Mail = require("./lib/Mail"),
  // Routes
  authRoutes = require("./routes/authRoutes"),
  indexRoutes = require("./routes/index"),
  productRoutes = require("./routes/products");

var Recaptcha = require("express-recaptcha").RecaptchaV3;
// import Recaptcha from 'express-recaptcha'
var options = { theme: "light", callback: "recaptchaCallback" };
var recaptcha = new Recaptcha(
  process.env.RECAPTCHA_SITE_KEY,
  process.env.RECAPTCHA_SECRET,
  options
);

app.use(function (req, res, next) {
  res.locals.captcha = recaptcha.render();
  next();
});

app.disable("x-powered-by");

app.locals.paypal = config.paypal;
app.locals.locale = config.locale;

app.set("trust proxy", 1);


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(helmet());

const url =require("./lib/db.js");

app.use(
  session({
    secret: config.secret,
    store: new MongoStore({
      url: url,
      collection: "sessions",
      ttl: 1 * 24 * 60 * 60,
    }),
    saveUninitialized: false,
    resave: false,
    cookie: { secure: true },
    name: config.name + "-" + Security.generateId(),
    genid: (req) => {
      return Security.generateId();
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser((user, done) => {
  var sessionUser = { _id: user._id, email: user.email, roles: user.roles };
  done(null, sessionUser);
});

passport.deserializeUser((sessionUser, done) => {
  // The sessionUser object is different from the user mongoose collection
  // it's actually req.session.passport.user and comes from the session collection
  done(null, sessionUser);
});

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use(authRoutes);
app.use("/products", productRoutes);
app.use(indexRoutes);

// app.get("/services/index", function(req, res) {
//     res.render("services/index", {page: "service"});
// })

// app.get("/services/maintenance", function(req, res) {
//     res.render("services/maintenance", {page: "service"});
// })

// app.get("/services/support", function(req, res) {
//     res.render("services/support", {page: "service"});
// })

https://stackoverflow.com/a/65721397
app.listen(8080, "0.0.0.0", function (req, res) {
  console.log("Server is running.");
});
