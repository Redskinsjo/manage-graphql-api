const mongoose = require("mongoose");
const conn = require("../../index").conn_main;

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

module.exports = conn.model("Table", TableSchema);
