const mongoose = require("mongoose");
const conn = require("../../index").conn_restaurant_asset;

const Schema = mongoose.Schema;

const SideSchema = new Schema({
  name: String,
  origin: String,
});

module.exports = conn.model("Side", SideSchema);
