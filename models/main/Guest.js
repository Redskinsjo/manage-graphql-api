const mongoose = require("mongoose");
const conn = require("../../index").conn_main;

const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  fullname: String,
  firstname: String,
  lastname: String,
  returningGuest: Boolean,
  previousDishes: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  anniversary: String,
});

module.exports = conn.model("Guest", GuestSchema);
