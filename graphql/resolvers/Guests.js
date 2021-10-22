const Guest = require("../../models/main/Guest");
const Order = require("../../models/main/Order");

const guestsResolvers = {
  guest: async ({ id }) => {
    try {
      if (id) {
        const guest = await Guest.findById(id);
        if (guest) {
          return guest;
        }
      } else {
        throw new Error("missing the id");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  guests: async () => {
    try {
      const guests = await Guest.find();
      if (guests) {
        return guests;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  searchGuest: async ({ input }) => {
    try {
      if (input) {
        const regex = new RegExp(input, "gi");
        const guests = await Guest.find({ fullname: regex }).populate({
          path: "previousDishes",
          model: Order,
        });
        return guests;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  createGuest: async ({
    data: {
      fullname,
      firstname,
      lastname,
      returningGuest,
      previousDishes,
      anniversary,
    },
  }) => {
    try {
      const exist = await Guest.findOne({ firstname, lastname, anniversary });
      if (!exist) {
        const newGuest = new Guest({
          fullname,
          firstname,
          lastname,
          returningGuest,
          previousDishes,
          anniversary,
        });
        const savedGuest = await newGuest.save();
        return savedGuest;
      } else {
        throw new Error("elem already exist");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  updateGuest: async ({ id, data }) => {
    try {
      const updatedGuest = await Guest.findByIdAndUpdate(id, data);
      return updatedGuest;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

module.exports = guestsResolvers;
