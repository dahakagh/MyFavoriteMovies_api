const { gql } = require('apollo-server-express')
const Genre = require('./Genre')
const Movie = require('./Movie')
const User = require('./User')
<<<<<<< HEAD
=======
const autorization = require('./authorization')
>>>>>>> 7823c59035f731d064cf27149b460d638cacf504

const linkSchema = gql`
  type Query {
      _:Boolean!
  }

  type Mutation {
      _:Boolean!
  }
`

<<<<<<< HEAD
module.exports = [linkSchema, Genre, Movie, User]
=======
module.exports = [linkSchema, Genre, Movie, User, autorization]
>>>>>>> 7823c59035f731d064cf27149b460d638cacf504

