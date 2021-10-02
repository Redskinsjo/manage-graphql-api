const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MainSchema = new Schema({
  name: String,
  piece: String,
  origin: String,
});

module.exports = mongoose.model("Main", MainSchema);
