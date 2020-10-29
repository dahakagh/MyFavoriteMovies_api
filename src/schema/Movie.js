const { gql } = require('apollo-server');

const typeDefs = gql`
    type Movie {
        id: ID!
        movieId: ID!    
        title: String
        poster_path: String
        release_data: String
        watched: Boolean
        with_genres: [ID!]
    }

    type Query {
        getMovies: [Movie]
        getSearchResult: [Movie]
        getMoviesByFilters: [Movie]
    }

    type Mutation {
        addMovie(id: ID!, movieId: ID!): Movie
        deleteMovie(userId: ID!, movieId: ID!): Moive
    }
`;


module.exports = typeDefs