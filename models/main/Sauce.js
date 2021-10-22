const mongoose = require("mongoose");
const conn = require("../../index").conn_main;

const Schema = mongoose.Schema;

const SauceSchema = new Schema({
  name: String,
  main: String,
  side1: String,
  side2: String,
  ratio: String,
});

module.exports = conn.model("Sauce", SauceSchema);
