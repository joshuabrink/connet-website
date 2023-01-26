var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    _id: Object,
    username: String,
    email: String,
    salt: String,
    hash: String

});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);