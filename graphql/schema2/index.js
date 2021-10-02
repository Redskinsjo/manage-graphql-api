/* eslint-disable no-unused-vars */
const graphql = require("graphql");
const Guest = require("../../models/Guest");
const Table = require("../../models/Table");
const Order = require("../../models/Order");
const { TableInput, TableType } = require("./Tables");
const { OrderInput, OrderType } = require("./Orders");
const { GuestInput, GuestType } = require("./Guests");

const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    table: {
      type: TableType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const result = await Table.findById({ _id: args.id });
        return result;
      },
    },
    tables: {
      type: new GraphQLList(TableType),
      async resolve(parent, args) {
        const result = await Table.find();
        return result;
      },
    },
    // ordersByTable: {
    //   type: new GraphQLList(OrderType),
    //   args: { tableId: { type: GraphQLID } },
    //   async resolve(parent, args) {
    //     const result = await Order.find({ table: tableId });
    //     return result;
    //   },
    // },
    // guests: {
    //   type: new GraphQLList(GuestType),
    //   async resolve(parent, args) {
    //     const result = await Guest.find();
    //     return result;
    //   },
    // },
  },
});

const Mutation = new GraphQLObjectType({
  name: "MutationType",
  fields: {
    // createTable: {
    //   type: TableType,
    //   args: { data: { type: TableInput } },
    //   async resolve(parent, args) {
    //     const { numero, seats, indoor, outdoor, active, guests, orders } =
    //       args.data;
    //     const newTable = new Table({
    //       numero,
    //       seats,
    //       indoor,
    //       outdoor,
    //       active,
    //       guests,
    //       orders,
    //     });
    //     const table = await newTable.save();
    //     return table;
    //   },
    // },
    // updateTable: {
    //   type: TableType,
    //   args: { id: { type: GraphQLID }, data: { type: TableInput } },
    //   async resolve(parent, args) {
    //     try {
    //       const table = await Table.findByIdAndUpdate(
    //         { _id: args.id },
    //         args.data
    //       );
    //       return table;
    //     } catch (err) {
    //       console.log(err.response);
    //     }
    //   },
    // },
    // deleteTable: {
    //   type: TableType,
    //   args: { id: { type: GraphQLID } },
    //   async resolve(parent, args) {
    //     try {
    //       const response = await Table.findByIdAndDelete({ _id: args.id });
    //       return response;
    //     } catch (err) {
    //       console.log(err.response);
    //     }
    //   },
    // },
    // createOrder: {
    //   type: OrderType,
    //   args: { data: { type: OrderInput } },
    //   async resolve(parent, args) {
    //     try {
    //       const {
    //         consumer,
    //         table,
    //         name,
    //         main,
    //         side,
    //         salt,
    //         pepper,
    //         herbsAndSpices,
    //         sauce,
    //         cooking,
    //       } = args.data;
    //       const order = new Order({
    //         consumer,
    //         table,
    //         name,
    //         main,
    //         side,
    //         salt,
    //         pepper,
    //         herbsAndSpices,
    //         sauce,
    //         cooking,
    //       });
    //       const newOrder = await order.save();
    //       return newOrder;
    //     } catch (err) {
    //       console.log(err.response);
    //     }
    //   },
    // },
    // createGuest: {
    //   type: GuestType,
    //   args: { data: { type: GuestInput } },
    //   async resolve(parent, args) {
    //     const {
    //       fullname,
    //       firstname,
    //       lastname,
    //       returningGuest,
    //       previousDishes,
    //       anniversary,
    //     } = args.data;
    //     const guest = new Guest({
    //       fullname,
    //       firstname,
    //       lastname,
    //       returningGuest,
    //       previousDishes,
    //       anniversary,
    //     });
    //     const newGuest = await guest.save();
    //     return newGuest;
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

// _id: { type: GraphQLID },
//     numero: { type: GraphQLInt },
//     seats: { type: GraphQLInt },
//     indoor: { type: GraphQLBoolean },
//     outdoor: { type: GraphQLBoolean },
//     active: { type: GraphQLBoolean },
//     guests: {
//       type: GuestSeated,
//     },
//     orders: {
//       type: new GraphQLList(OrderType),
//       async resolve(parent, args) {
//         const tableId = parent._id;
//         const result = await Order.find({ _id: tableId });
//         return result;
//       },
//     },
