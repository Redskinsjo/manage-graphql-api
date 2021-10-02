const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TableSchema = new Schema({
  numero: Number,
  seats: Number,
  indoor: Boolean,
  outdoor: Boolean,
  active: Boolean,
  guests: {
    count: Number,
    profiles: [
      {
        type: String,
        // type: Schema.Types.ObjectId,
        // ref: "Guest",
      },
    ],
  },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("Table", TableSchema);
