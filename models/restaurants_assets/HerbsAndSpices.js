const mongoose = require("mongoose");
const conn = require("../../index").conn_restaurant_asset;

const Schema = mongoose.Schema;

const HerbsAndSpicesSchema = new Schema({
  name: String,
  origin: String,
  spicy: Boolean,
});

module.exports = conn.model("HerbsAndSpices", HerbsAndSpicesSchema);
