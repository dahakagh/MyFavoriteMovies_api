const { gql } = require('apollo-server-express')
const Genre = require('./Genre')
const Movie = require('./Movie')
const User = require('./User')
const autorization = require('./authorization')

const linkSchema = gql`
  type Query {
      _:Boolean!
  }

  type Mutation {
      _:Boolean!
  }
`

module.exports = [linkSchema, Genre, Movie, User, autorization]

