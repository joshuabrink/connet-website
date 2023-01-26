var mongoose = require("mongoose");

var brandSchema = new mongoose.Schema({
    _id: Object,
    src: String,
    href: String

});


module.exports = mongoose.model("Brand", brandSchema);