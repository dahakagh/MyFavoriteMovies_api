import fetch from 'node-fetch';
import { search_url, nowPlaying_url, popular_url, topRated_url, upcoming_url, configs_url } from './api';
import { movie } from './utils';

const getConfigs = () =>
    fetch(configs_url)
      .then(res => res.json())
      .then(configs => configs.images)


const getNowPlaying = (parent, page) => {
  return fetch(`${nowPlaying_url}&page=${page}`)
    .then(res => res.json())
    .then(data => {
        const results = {
            type: 'now_playing',
            page: data.page,
            total: data.total_results,
            total_pages: data.total_pages,
            date: data.dates,
            results: movie(parent, data)
        };

        return results
    })
}

const getSearchResult = (parent, keyword) => {
  
    return fetch(`${search_url}&query=${encodeURI(keyword)}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(movie)
        const results = {
          type: "search",
          keyword: keyword,
          page : data.page,
          total : data.total_results,
          total_pages : data.total_pages,
          date : data.dates,
          results: movie(parent, data)
        }
        return results;
      });
  };

const getPopular = (parent, page) => {

    return fetch(`${popular_url}&page=${page}`)
      .then(res => res.json())
      .then(data => {
          const results = {
              type: 'popular',
              page: data.page,
              total: data.total_results,
              total_pages: data.total_pages,
              date: data.dates,
              results: movie(parent, data)
          };
  
          return results
      })
  }

  const getTopRated = (parent, page) => {
    return fetch(`${topRated_url}&page=${page}`)
      .then(res => res.json())
      .then(data => {
          const results = {
              type: 'top_rated',
              page: data.page,
              total: data.total_results,
              total_pages: data.total_pages,
              date: data.dates,
              results: movie(parent, data)
          };
  
          return results
      })
  }

  const getUpcoming = (parent, page) => {
    return fetch(`${upcoming_url}&page=${page}`)
      .then(res => res.json())
      .then(data => {
          const results = {
              type: 'upcoming',
              page: data.page,
              total: data.total_results,
              total_pages: data.total_pages,
              date: data.dates,
              results: movie(parent, data)
          };
  
          return results
      })
  }

  export {getConfigs, getGenres, getNowPlaying, getPopular, getSearchResult, getTopRated, getUpcoming}