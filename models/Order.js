const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  consumer: { type: Schema.Types.ObjectId, ref: "Guest" },
  table: { type: Schema.Types.ObjectId, ref: "Table" },
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

module.exports = mongoose.model("Order", OrderSchema);
