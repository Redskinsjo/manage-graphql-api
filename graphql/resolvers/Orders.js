const Order = require("../../models/main/Order");
const Table = require("../../models/main/Table");
const Main = require("../../models/restaurants_assets/Main");
const Side = require("../../models/restaurants_assets/Side");
const HerbsAndSpices = require("../../models/restaurants_assets/HerbsAndSpices");
const Sauce = require("../../models/restaurants_assets/Sauce");

const ordersResolvers = {
  order: async (id) => {
    try {
      if (id) {
        const order = await Order.findById(id);
        if (order) {
          return order;
        }
      } else {
        throw new Error("missing the id");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  orders: async () => {
    try {
      const orders = await Order.find().populate({
        pathname: "name",
        model: Main,
      });
      if (orders) {
        return orders;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  ordersByTable: async ({ tableId }) => {
    const result = await Order.find({ table: tableId })
      .populate({
        path: "main",
        model: Main,
      })
      .populate({ path: "side", model: Side })
      .populate({ path: "herbsAndSpices", model: HerbsAndSpices })
      .populate({ path: "sauce", model: Sauce });
    return result;
  },
  createOrder: ({
    data: {
      table,
      name,
      main,
      side,
      salt,
      pepper,
      herbsAndSpices,
      sauce,
      cooking,
    },
  }) => {
    try {
      const newOrder = new Order({
        table,
        name,
        main,
        side,
        salt,
        pepper,
        herbsAndSpices,
        sauce,
        cooking,
      });
      let createdOrder;
      newOrder
        .save()
        .then((savedOrder) => {
          createdOrder = savedOrder;
          return Table.findOne({ numero: table });
        })
        .then((tableRelated) => {
          if (tableRelated) {
            tableRelated.orders.push(createdOrder);
            return tableRelated.save();
          } else {
            throw new Error("no table related exist");
          }
        })
        .then(() => {
          return createdOrder;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  updateOrder: async ({ id, data }) => {
    try {
      const exist = await Order.findById(id);
      if (exist) {
        const newOrder = new Order(data);
        const savedOrder = await newOrder.save();
        return savedOrder;
      } else {
        throw new Error("guest doesn't exist in DB");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

module.exports = ordersResolvers;
