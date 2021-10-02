const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HerbsAndSpicesSchema = new Schema({
  name: String,
  origin: String,
  spicy: Boolean,
});

module.exports = mongoose.model("HerbsAndSpices", HerbsAndSpicesSchema);
