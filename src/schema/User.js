const { gql } = require('apollo-server');


const typeDefs = gql`
    type Query {
        user(login: String!): User
<<<<<<< HEAD
        checkUser(login: String!, password: String!): Boolean
=======
>>>>>>> 7823c59035f731d064cf27149b460d638cacf504
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