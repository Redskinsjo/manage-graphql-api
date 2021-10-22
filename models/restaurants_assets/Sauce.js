const mongoose = require("mongoose");
const conn = require("../../index").conn_restaurant_asset;

const Schema = mongoose.Schema;

const SauceSchema = new Schema({
  name: String,
  main: String,
  ratio: String,
  side1: String,
  side2: String,
  side3: String,
  side4: String,
  side5: String,
});

module.exports = conn.model("Sauce", SauceSchema);
