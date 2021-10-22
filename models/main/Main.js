const mongoose = require("mongoose");
const conn = require("../../index").conn_main;

const Schema = mongoose.Schema;

const MainSchema = new Schema({
  name: String,
  piece: String,
  origin: String,
});

module.exports = conn.model("Main", MainSchema);
