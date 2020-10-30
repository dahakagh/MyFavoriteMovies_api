const movie = (parent, data) => {
    const sizes = parent.poster_sizes;
    const size_original = sizes[sizes.length - 1];
    const size_large = sizes[sizes.length - 2];
    const size_medium = sizes[sizes.length - 3];
    const size_small = sizes[sizes.length - 4];
    
    const results = {
        image_url: parent.secure_base_url,
        image_original: size_original,
        image_large: size_large,
        image_medium: size_medium,
        image_small: size_small,
        movies: data.results
    }
    return results;
};

const getGenres = parent => {
<<<<<<< HEAD
    const genres = [];
    const data = parent.genres.genres;
=======
    const genreList = [];
    const data = parent.genres.genreList;
>>>>>>> 7823c59035f731d064cf27149b460d638cacf504

    data.forEach(genre => {
        const genres = {
            id: genre.id,
            name: genre.name
        }
        genre.push(genres)
    })
    return genres;
}

const getMovies = parent => {
    const movies = [];
    const data = parent.results.movies;

    data.forEach(movie => {
        const results = {
            id: movie.id,
            title: movie.title,
            original_title: movie.original_title,
            poster_hd: `${parent.image_url}${parent.image_original}${movie.poster_path}`,
            poster_large: `${parent.image_url}${parent.image_large}${movie.poster_path}`,
            poster_medium: `${parent.image_url}${parent.image_medium}${movie.poster_path}`,
            poster_small: `${parent.image_url}${parent.image_small}${movie.poster_path}`,
            vote_average: movie.vote_average,
            overview: movie.overview
        }
        movie.push(results);
    });
    return movies;
};

<<<<<<< HEAD
export { movie, getMovies, getGenres }
=======
export { movie,genre, getMovies, getGenres }
>>>>>>> 7823c59035f731d064cf27149b460d638cacf504
