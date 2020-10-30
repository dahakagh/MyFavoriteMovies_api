import { getConfigs, getNowPlaying, getPopular, getSearchResult, getTopRated, getUpcoming } from '../services/index'
import { getMovies, getGenres } from '../services/utils'

const resolvers = {
    Query: {
        configs: () => getConfigs()
    },
    Configs: {
<<<<<<< HEAD
        movieByFilters: (parent, {filters}) => getMoviesByFilters(parent, filters),
        movieSearch: (parent, {keyword}) => getSearchResult(parent, keyword)
        /*
        moviePopular: (parent, {page}) => getPopular(parent, page),
        movieTopRated: (parent, {page}) => getTopRated(parent, page),
        movieUpcoming: (parent, {page}) => getUpcoming(parent, page)
        */
=======
        nowPlaying: (parent, {page}) => getNowPlaying(parent, page),
        movieSearch: (parent, {keyword}) => getSearchResult(parent, keyword),
        moviePopular: (parent, {page}) => getPopular(parent, page),
        movieTopRated: (parent, {page}) => getTopRated(parent, page),
        movieUpcoming: (parent, {page}) => getUpcoming(parent, page)
>>>>>>> 7823c59035f731d064cf27149b460d638cacf504
    },
    Results: {
        genres: parent => getGenres(parent),
        movies: parent => getMovies(parent)
    }
};

export default resolvers;

