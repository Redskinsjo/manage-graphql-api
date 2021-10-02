const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SauceSchema = new Schema({
  name: String,
  main: String,
  side1: String,
  side2: String,
  ratio: String,
});

module.exports = mongoose.model("Sauce", SauceSchema);
