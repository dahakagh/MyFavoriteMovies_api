import { getConfigs, getNowPlaying, getPopular, getSearchResult, getTopRated, getUpcoming } from '../services/index'
import { getMovies, getGenres } from '../services/utils'

const resolvers = {
    Query: {
        configs: () => getConfigs()
    },
    Configs: {
        movieByFilters: (parent, {filters}) => getMoviesByFilters(parent, filters),
        movieSearch: (parent, {keyword}) => getSearchResult(parent, keyword)
        /*
        moviePopular: (parent, {page}) => getPopular(parent, page),
        movieTopRated: (parent, {page}) => getTopRated(parent, page),
        movieUpcoming: (parent, {page}) => getUpcoming(parent, page)
        */
    },
    Results: {
        genres: parent => getGenres(parent),
        movies: parent => getMovies(parent)
    }
};

export default resolvers;

