const graphql = require("graphql");
const {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInputObjectType,
} = graphql;

const MainType = new GraphQLObjectType({
  name: "Main",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    piece: { type: GraphQLString },
    origin: { type: GraphQLString },
  }),
});
const MainInput = new GraphQLInputObjectType({
  name: "MainInput",
  fields: () => ({
    name: { type: GraphQLString },
    piece: { type: GraphQLString },
    origin: { type: GraphQLString },
  }),
});
const SideType = new GraphQLObjectType({
  name: "Side",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    origin: { type: GraphQLString },
  }),
});
const SideInput = new GraphQLInputObjectType({
  name: "SideInput",
  fields: () => ({
    name: { type: GraphQLString },
    origin: { type: GraphQLString },
  }),
});
const HerbsAndSpicesType = new GraphQLObjectType({
  name: "HerbsAndSpices",
  fields: () => ({
    _id: { type: GraphQLID },

    name: { type: GraphQLString },
    origin: { type: GraphQLString },
    spicy: { type: GraphQLBoolean },
  }),
});
const HerbsAndSpicesInput = new GraphQLInputObjectType({
  name: "HerbsAndSpicesInput",
  fields: () => ({
    name: { type: GraphQLString },
    origin: { type: GraphQLString },
    spicy: { type: GraphQLBoolean },
  }),
});
const SauceType = new GraphQLObjectType({
  name: "Sauce",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    main: { type: GraphQLString },
    side1: { type: GraphQLString },
    side2: { type: GraphQLString },
    ratio: { type: GraphQLString },
  }),
});
const SauceInput = new GraphQLInputObjectType({
  name: "SauceInput",
  fields: () => ({
    name: { type: GraphQLString },
    main: { type: GraphQLString },
    side1: { type: GraphQLString },
    side2: { type: GraphQLString },
    ratio: { type: GraphQLString },
  }),
});

module.exports = {
  SauceType,
  SauceInput,
  HerbsAndSpicesType,
  HerbsAndSpicesInput,
  MainType,
  MainInput,
  SideType,
  SideInput,
};
