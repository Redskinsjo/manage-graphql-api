const Table = require("../../models/Table");

const tablesResolvers = {
  table: async ({ id }) => {
    try {
      console.log(9);
      if (id) {
        console.log("before query table unit");
        console.log(id);
        const table = await Table.findById(id);
        if (table) {
          return table;
        }
      } else {
        throw new Error("missing the id");
      }
    } catch (err) {
      throw new Error(err);
    }
  },
  tables: async () => {
    try {
      const tables = await Table.find();
      // .populate({
      //   path: "orders",
      //   populate: { path: "main" },
      // });
      // console.log("after");
      // console.log(tables[0].orders[0]);
      if (tables) {
        return tables;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  createTable: async ({
    data: { numero, seats, indoor, outdoor, active, guests, orders },
  }) => {
    try {
      const exist = await Table.findOne({ numero, active: true });
      if (!exist) {
        const newTable = new Table({
          numero,
          seats,
          indoor,
          outdoor,
          active,
          guests,
          orders,
        });
        const savedTable = await newTable.save();
        return savedTable;
      } else {
        throw new Error("elem already exist");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  updateTable: async ({ id, data }) => {
    try {
      const exist = await Table.findById(id);
      if (exist) {
        const newTable = new Table(data);
        const savedTable = await newTable.save();
        return savedTable;
      } else {
        throw new Error("guest doesn't exist in DB");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  deleteTable: async ({ id }) => {
    try {
      const table = await Table.findByIdAndDelete(id);
      // console.log(id, table);
      // if (table) {
      //   const deletedTable = await Table.deleteOne({ _id: id });
      console.log(table);
      return table;
      // }
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

module.exports = tablesResolvers;
