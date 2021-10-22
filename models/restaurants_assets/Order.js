const mongoose = require("mongoose");
const conn = require("../../index").conn_restaurant_asset;

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: String,
  main: {
    type: Schema.Types.ObjectId,
    ref: "Main",
  },
  side: {
    type: Schema.Types.ObjectId,
    ref: "Side",
  },
  salt: String,
  pepper: String,
  herbsAndSpices: [
    {
      type: Schema.Types.ObjectId,
      ref: "HerbsAndSpices",
    },
  ],
  sauce: { type: Schema.Types.ObjectId, ref: "Sauce" },
  cooking: String,
});

module.exports = conn.model("Order", OrderSchema);
