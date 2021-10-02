/* eslint-disable no-unused-vars */
const Guest = require("../../models/Guest");
const Order = require("../../models/Order");
const graphql = require("graphql");
const {
  GraphQLList,
  GraphQLInt,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInputObjectType,
} = graphql;
const { OrderType, OrderInput } = require("./Orders");

const GuestSeated = new GraphQLObjectType({
  name: "GuestSeated",
  fields: () => ({
    count: { type: GraphQLInt },
    profiles: {
      type: new GraphQLList(GuestType),
      // async resolve(parent, args) {
      // return the guests targeted
      //   const tableId = parent._id;
      //   const result = await Guest.find({ _id: tableId });
      //   return result;
      // },
    },
  }),
});

const GuestSeatedInput = new GraphQLInputObjectType({
  name: "GuestSeatedInput",
  fields: () => ({
    count: { type: GraphQLInt },
    profiles: { type: GraphQLList(GuestInput) },
  }),
});

const GuestType = new GraphQLObjectType({
  name: "Guest",
  fields: () => ({
    _id: { type: GraphQLID },
    fullname: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    returningGuest: { type: GraphQLBoolean },
    previousDishes: {
      type: new GraphQLList(OrderType),
      // async resolve(parent, args) {
      //   const guestId = parent._id;
      //   const result = await Order.find({ _id: guestId });
      //   return result;
      // },
    },
    anniversary: { type: GraphQLString },
  }),
});

const GuestInput = new GraphQLInputObjectType({
  name: "GuestInput",
  fields: () => ({
    fullname: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    returningGuest: { type: GraphQLBoolean },
    previousDishes: { type: new GraphQLList(OrderInput) },
    anniversary: { type: GraphQLString },
  }),
});

module.exports = { GuestSeated, GuestSeatedInput, GuestInput, GuestType };
