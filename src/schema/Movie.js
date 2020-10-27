const { gql } = require('apollo-server');

const typeDefs = gql`
    type Movie {
        id: ID!
        movieId: ID!    
        title: String
        poster_path: String
        release_data: String
        watched: Boolean
        genre_ids: ID!
    }

    type Query {
        getGenres: [Genre]
        getMovies: [Movie]
        getSearchResult: [Movie]
        getPopular: [Movie]
        getNowPlaying: [Movie]
        getTopRated: [Movie]
        getUpcoming: [Movie]
    }

    type Mutation {
        addMovie(id: ID!, movieId: ID!): Movie
        deleteMovie(userId: ID!, movieId: ID!): Moive
    }
`;


module.exports = typeDefs