const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
      authorization(login: String!, password: String!): autorization
  }

  type authorization {
      user: User
      toker: String
  }
`
module.exports = typeDefs


