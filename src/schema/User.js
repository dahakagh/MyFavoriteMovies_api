const { gql } = require('apollo-server');


const typeDefs = gql`
    type Query {
        user(login: String!): User
    }

    type User {
        id: ID!
        login: String
        password: String 
        genres: [Genre]
        movies: [Movie]
    }
`;

module.exports = typeDefs