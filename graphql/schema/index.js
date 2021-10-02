const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Main {
        _id: ID
        name: String
        piece: String
        origin: String  
    }
    input MainInput {
        name: String
        piece: String
        origin: String
    }
    type Side {
        _id: ID
        name: String
        origin: String
    }
    input SideInput {
        name: String
        origin: String
    }
    type HerbsAndSpices {
        _id: ID
        name: String
        origin: String
        spicy: Boolean  
    }
    input HerbsAndSpicesInput {
        name: String
        origin: String
        spicy: Boolean
    }
    type Sauce {
        _id: ID
        name: String
        main: String
        side1: String
        side2: String
        ratio: String  
    }
    input SauceInput {
        name: String
        main: String
        side1: String
        side2: String
        ratio: String
    }

    type Order {
        _id: ID
        name: String
        main: Main
        side: Side
        salt: String
        pepper: String
        herbsAndSpices: HerbsAndSpices
        sauce: Sauce
        cooking: String
        consumer: Guest
        table: Table
    } 
    input OrderInput {
        name: String
        main: MainInput
        side: SideInput
        salt: String
        pepper: String
        herbsAndSpices: HerbsAndSpicesInput
        sauce: SauceInput
        cooking: String
        consumer: String
        table: TableInput
    }

    type Guest {
        _id: ID
        fullname: String
        firstname: String
        lastname: String
        returningGuest: Boolean
        previousDishes: [Order!]
        anniversary: String
    }
    input GuestInput {
        fullname: String
        firstname: String
        lastname: String
        returningGuest: Boolean
        previousDishes: [OrderInput!]
        anniversary: String
    }
    type GuestsSeated {
        count: Int
        profiles: [Guest!]
    }
    input GuestsSeatedInput {
        count: Int
        profiles: [String]
    }

    type Table {
        _id: ID
        numero: Int
        seats: Int
        indoor: Boolean
        outdoor: Boolean
        active: Boolean
        guests: GuestsSeated
        orders: [Order]
    }
    input TableInput {
        numero: Int
        seats: Int
        indoor: Boolean
        outdoor: Boolean
        active: Boolean
        guests: GuestsSeatedInput
        orders: [OrderInput]

    }


  type RootQuery {
    guest(id: ID!): Guest!
    guests: [Guest!]!
    ordersByTable(tableId: ID!): [Order]
    order(id: ID!): Order!
    orders: [Order!]!
    table(id: ID): Table
    tables: [Table!]!
}
type RootMutation {
    createTable(data: TableInput): Table
    updateTable(id: ID!, data: TableInput): Table
    deleteTable(id: ID): Table
    createOrder(data: OrderInput): Order
    updateOrder(id: ID!, data: OrderInput): Order
    createGuest(data: GuestInput): Guest
    updateGuest(id: ID!, data: GuestInput): Guest
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
