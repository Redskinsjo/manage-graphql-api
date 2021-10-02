const Order = require("../../models/Order");

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
      const orders = await Order.find();
      if (orders) {
        return orders;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  ordersByTable: async ({ tableId }) => {
    const result = await Order.find({ table: tableId });
    return result;
  },
  createOrder: async ({
    data: { name, main, side, salt, pepper, herbsAndSpices, sauce, cooking },
  }) => {
    try {
      const exist = await Order.findOne({ name });
      if (!exist) {
        const newOrder = new Order({
          name,
          main,
          side,
          salt,
          pepper,
          herbsAndSpices,
          sauce,
          cooking,
        });
        const savedOrder = await newOrder.save();
        return savedOrder;
      } else {
        throw new Error("elem already exist");
      }
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
