/* eslint-disable no-undef */
const app = require("express")();

const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require("./graphql/schema");
// const schema = require("./graphql/schema2/index");
require("dotenv").config();

app.use(
  cors({
    origin: ["https://manage-mvp.netlify.app", "http://localhost:3000"],
    methods: "*",
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);
// Connection DB
module.exports.conn_main = mongoose.createConnection(
  process.env.MONGODB_URI_MAIN_API,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
module.exports.conn_restaurant_asset = mongoose.createConnection(
  process.env.MONGODB_URI_RESTAURANT_ASSETS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
const guestsResolvers = require("./graphql/resolvers/Guests");
const ordersResolvers = require("./graphql/resolvers/Orders");
const tablesResolvers = require("./graphql/resolvers/Tables");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: {
      ...guestsResolvers,
      ...ordersResolvers,
      ...tablesResolvers,
    },
    graphiql: true,
  })
);

const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    method: "*",
    allowedHeaders: ["Content-Type"],
    // credentials: true,
  },
});
app.get("/", (req, res) => {
  res.send("<h1>Hello this is the server</h1>");
});

io.on("connection", () => {
  console.log("socket connection");
});

http.listen(process.env.PORT || 3009, () => {
  console.log("server listening", process.env.PORT || 3009);
});
