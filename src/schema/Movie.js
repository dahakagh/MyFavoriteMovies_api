const { gql } = require('apollo-server');

const typeDefs = gql`
    type Movie {
        id: ID!
        movieId: ID!    
        title: String
        poster_path: String
        release_data: String
        watched: Boolean
<<<<<<< HEAD
        with_genres: [ID!]
    }

    type Query {
        getMovies: [Movie]
        getSearchResult: [Movie]
        getMoviesByFilters: [Movie]
=======
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
>>>>>>> 7823c59035f731d064cf27149b460d638cacf504
    }

    type Mutation {
        addMovie(id: ID!, movieId: ID!): Movie
        deleteMovie(userId: ID!, movieId: ID!): Moive
    }
`;


module.exports = typeDefs