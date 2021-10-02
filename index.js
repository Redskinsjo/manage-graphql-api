/* eslint-disable no-undef */
const app = require("express")();

const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const guestsResolvers = require("./graphql/resolvers/Guests");
const ordersResolvers = require("./graphql/resolvers/Orders");
const tablesResolvers = require("./graphql/resolvers/Tables");
const schema = require("./graphql/schema");
// const schema = require("./graphql/schema2/index");
require("dotenv").config();

// Connection DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
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
