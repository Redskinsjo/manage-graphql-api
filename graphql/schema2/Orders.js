const graphql = require("graphql");
const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLInputObjectType } =
  graphql;
const { GuestType, GuestInput } = require("./Guests");
// const { TableType, TableInput } = require("./Tables");
const {
  MainType,
  MainInput,
  SideType,
  SideInput,
  HerbsAndSpicesType,
  HerbsAndSpicesInput,
  SauceType,
  SauceInput,
} = require("./Others");

const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    _id: { type: GraphQLID },
    consumer: { type: GuestType },
    table: { type: TableType },
    name: { type: GraphQLString },
    main: { type: MainType },
    side: { type: SideType },
    salt: { type: GraphQLString },
    pepper: { type: GraphQLString },
    herbsAndSpices: { type: HerbsAndSpicesType },
    sauce: { type: SauceType },
    cooking: { type: GraphQLString },
  }),
});

const OrderInput = new GraphQLInputObjectType({
  name: "OrderInput",
  fields: () => ({
    consumer: { type: GuestInput },
    table: { type: TableInput },
    name: { type: GraphQLString },
    main: { type: MainInput },
    side: { type: SideInput },
    salt: { type: GraphQLString },
    pepper: { type: GraphQLString },
    herbsAndSpices: { type: HerbsAndSpicesInput },
    sauce: { type: SauceInput },
    cooking: { type: GraphQLString },
  }),
});

module.exports = { OrderType, OrderInput };
