import "reflect-metadata"
import * as express from "express"
import { createConnection } from "typeorm"
import { typeDefs } from "./schema"
import { resolvers } from "./resolvers"

const { ApolloServer } = require("apollo-server");
const app = express()

createConnection()
  .then((connection) => {})
  .catch()

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(` Server ready at ${url} `)
})