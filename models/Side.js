const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SideSchema = new Schema({
  name: String,
  origin: String,
});

module.exports = mongoose.model("Side", SideSchema);
