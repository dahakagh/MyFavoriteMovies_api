const { gql } = require('apollo-server');

const typeDefs = gql`

    type Mutation {
        selectGenre(userId: ID!, genreId: ID!): Genre
    }

    type Genre {
        id: ID!
        genreId: ID!
        name: String
        select: Boolean
    }
<<<<<<< HEAD

    type Query {
      getGenres: [Genre]
    }
=======
>>>>>>> 7823c59035f731d064cf27149b460d638cacf504
`;

module.exports = typeDefs