const mongoose = require("mongoose");
const conn = require("../../index").conn_restaurant_asset;

const Schema = mongoose.Schema;

const TableSchema = new Schema({
  numero: Number,
  seats: Number,
  indoor: Boolean,
  outdoor: Boolean,
});

module.exports = conn.model("Table", TableSchema);
