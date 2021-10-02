const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  fullname: String,
  firstname: String,
  lastname: String,
  returningGuest: Boolean,
  previousDishes: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  anniversary: String,
});

module.exports = mongoose.model("Guest", GuestSchema);
