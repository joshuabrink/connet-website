var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  
  _id: Object,
  Name: String,
  ItemNumber: String,
  Price: String,
  Description: String,
  Brand: String,
  Type: String,
  
});

module.exports = mongoose.model("Product", productSchema);