const mongoose = require("mongoose");
const conn = require("../../index").conn_main;

const Schema = mongoose.Schema;

const HerbsAndSpicesSchema = new Schema({
  name: String,
  origin: String,
  spicy: Boolean,
});

module.exports = conn.model("HerbsAndSpices", HerbsAndSpicesSchema);
