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
const { GuestSeated, GuestSeatedInput } = require("./Guests");
// const Order = require("../../models/Order");

const TableType = new GraphQLObjectType({
  name: "Table",
  fields: () => ({
    _id: { type: GraphQLID },
    numero: { type: GraphQLInt },
    seats: { type: GraphQLInt },
    indoor: { type: GraphQLBoolean },
    outdoor: { type: GraphQLBoolean },
    active: { type: GraphQLBoolean },
    guests: {
      type: GuestSeated,
    },
    orders: {
      type: new GraphQLList(OrderType),
      // async resolve(parent, args) {
      //   const tableId = parent._id;
      //   const result = await Order.find({ _id: tableId });
      //   return result;
      // },
    },
  }),
});

const TableInput = new GraphQLInputObjectType({
  name: "TableInput",
  fields: () => ({
    numero: { type: GraphQLInt },
    seats: { type: GraphQLInt },
    indoor: { type: GraphQLBoolean },
    outdoor: { type: GraphQLBoolean },
    active: { type: GraphQLBoolean },
    guests: { type: GuestSeatedInput },
    orders: { type: new GraphQLList(OrderInput) },
  }),
});

module.exports = { TableInput, TableType };
