var express = require("express");
var router = express.Router();
var Brand = require("../models/brand"),
  Product = require("../models/product");

// app.get('/test', (req, res) => {
//   if(!req.session.cart) {
//       req.session.cart = {
//           items: [],
//           totals: 0.00,
//           formattedTotals: ''
//       };
//   }
//   Product.find({}, function(err, products) {
//       let format = new Intl.NumberFormat(req.app.locals.locale.lang, {style: 'currency', currency: req.app.locals.locale.currency});
//       products.forEach( (product) => {
//          product.formattedPrice = format.format(product.price);
//       });
//       res.render('productTest', {
//           pageTitle: 'Node.js Shopping Cart',
//           products: products,
//           nonce: Security.md5(req.sessionID + req.headers['user-agent']),
//           page: 'about'
//       });

//   }).catch(err => {
//       res.status(400).send('Bad request');
//   });

// });

// app.get('/cart', (req, res) => {
//     let sess = req.session;
//     let cart = (typeof sess.cart !== 'undefined') ? sess.cart : false;
//     res.render('cart', {
//         pageTitle: 'Cart',
//         cart: cart,
//         nonce: Security.md5(req.sessionID + req.headers['user-agent']),
//         page: 'about'
//     });
// });

// app.get('/cart/remove/:id/:nonce', (req, res) => {
//   let id = req.params.id;
//   if(/^\d+$/.test(id) && Security.isValidNonce(req.params.nonce, req)) {
//       Cart.removeFromCart(parseInt(id, 10), req.session.cart);
//       res.redirect('/cart');
//   } else {
//       res.redirect('/');
//   }
// });

// app.get('/cart/empty/:nonce', (req, res) => {
//     if(Security.isValidNonce(req.params.nonce, req)) {
//         Cart.emptyCart(req);
//         res.redirect('/cart');
//     } else {
//         res.redirect('/');
//     }
// });

// app.post('/cart', (req, res) => {
//     let qty = parseInt(req.body.qty, 10);
//     var product = mongoose.mongo.ObjectId(req.body._id);
//     if(qty > 0 && Security.isValidNonce(req.body.nonce, req)) {
//         Product.findOne({_id: product}).then(prod => {
//             let cart = (req.session.cart) ? req.session.cart : null;
//             Cart.addToCart(prod, qty, cart);
//             res.redirect('/cart');
//         }).catch(err => {
//             if(err)
//             console.log(err)
//             console.log(product)
//           res.redirect('/');

//         });
//     } else {
//         console.log(req.body.nonce)
//         res.redirect('/');

//     }
// });

// app.post('/cart/update', (req, res) => {
//     let ids = req.body["_id[]"];
//     let qtys = req.body["qty[]"];
//     if(Security.isValidNonce(req.body.nonce, req)) {
//         let cart = (req.session.cart) ? req.session.cart : null;
//         let i = (!Array.isArray(ids)) ? [ids] : ids;
//         let q = (!Array.isArray(qtys)) ? [qtys] : qtys;
//         Cart.updateCart(i, q, cart);
//         res.redirect('/cart');
//     } else {
//         res.redirect('/');
//     }
// });

// app.get('/checkout', (req, res) => {
//     let sess = req.session;
//     let cart = (typeof sess.cart !== 'undefined') ? sess.cart : false;
//     res.render('checkout', {
//         pageTitle: 'Checkout',
//         cart: cart,
//         checkoutDone: false,
//         nonce: Security.md5(req.sessionID + req.headers['user-agent']),
//         page: 'about'
//     });
// });

// app.post('/checkout', (req, res) => {
//     let sess = req.session;
//     let cart = (typeof sess.cart !== 'undefined') ? sess.cart : false;
//     if(Security.isValidNonce(req.body.nonce, req)) {
//         res.render('checkout', {
//             pageTitle: 'Checkout',
//             cart: cart,
//             checkoutDone: true
//         });
//     } else {
//         res.redirect('/');
//     }
// });

// app.get("/products/index", function(req, res) {
//     Product.find({}, function(err, products) {

//         if (err) {
//             console.log(err);
//         }
//         else {
//             /* products.Image = products.Name.toLowerCase().replace(/\s/g, '');*/
//             res.render("products/index", { products: products, page: "about", toast: "none" });
//             console.log(products.Image)
//         }
//     });
// })

router.get("/index", function (req, res) {
  Brand.find({}, function (err, brands) {
    if (err) {
      console.log(err);
    }

    res.render("products/index", {
      brands: brands,
      page: "products",
      toast: "none",
    });
  });
});

// router.get("/products/:type", function(req, res) {
//     Product.find({ Type: req.params.type }, function(err, foundProducts) {
//         if (err || !foundProducts) {
//             res.redirect("/products/index");
//         }
//         else {
//             res.render("products/show", { products: foundProducts, page: "about", toast: "none" });

//         }
//     });
// })

module.exports = router;
