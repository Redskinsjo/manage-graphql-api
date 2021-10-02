const Guest = require("../../models/Guest");

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
      const exist = await Guest.findOne({ fullname });
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
      const exist = await Guest.findById(id);
      if (exist) {
        const newGuest = new Guest(data);
        const savedGuest = await newGuest.save();
        return savedGuest;
      } else {
        throw new Error("guest doesn't exist in DB");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

module.exports = guestsResolvers;
