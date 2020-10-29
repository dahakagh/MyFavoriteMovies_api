import dotenv from 'dotenv';

dotenv.config();
const key = process.env.API_KEY;
const url = process.env.BASE_URL;
const configs_url = `${url}configuration?api_key=${key}`
const genre_url = `${url}genre/movie/list?api_key=${key}`
const search_url = `${url}search/movie?api_key=${key}`


export {configs_url, search_url, nowPlaying_url, popular_url, topRated_url, upcoming_url, genre_url, key, url }