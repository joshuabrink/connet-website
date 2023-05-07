const fs = require("fs");
var mongoose = require("mongoose");
mongoose.Promise = Promise;
const User = require("../models/user"),
  Product = require("../models/product"),
  Brand = require("../models/brand");

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } =
  process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// const url = "mongodb://127.0.0.1:27017/connet-db"
const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};
mongoose
  .connect(url, options)
  .then(async () => {
    const products = JSON.parse(
      fs.readFileSync("./seed/products.json", "utf8")
    );
    const brands = JSON.parse(fs.readFileSync("./seed/brands.json", "utf8"));
    const users = JSON.parse(fs.readFileSync("./seed/users.json", "utf8"));

    // check if products exist
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await Product.create(products);
    }

    // check if brands exist
    const brandCount = await Brand.countDocuments();
    if (brandCount === 0) {
      await Brand.create(brands);
    }

    // check if users exist
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      await User.create(users);
    }
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = url;
