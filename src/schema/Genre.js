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
`;

module.exports = typeDefs