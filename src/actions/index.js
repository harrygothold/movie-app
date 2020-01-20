import axios from "axios";
import * as Types from "./types";

export const getTrendingMovies = () => async dispatch => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`
    );
    if (res.data) {
      dispatch({
        type: Types.GET_TRENDING,
        payload: res.data.results
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAllGenres = () => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`
  );
  if (res) {
    dispatch({
      type: Types.GET_GENRES,
      payload: res.data
    });
  }
};

export const filterMovies = (genreId, value) => dispatch => {
  dispatch({
    type: Types.FILTER_MOVIES,
    payload: {
      genreId,
      value
    }
  });
};

export const returnMovies = () => dispatch => {
  dispatch({
    type: Types.RETURN_MOVIES
  });
};

export const removeFilter = name => dispatch => {
  dispatch({
    type: Types.REMOVE_FILTER,
    payload: name
  });
};

export const sortAZ = () => dispatch => {
  dispatch({
    type: Types.SORT_AZ
  });
};

export const sortZA = () => dispatch => {
  dispatch({
    type: Types.SORT_ZA
  });
};

export const toggleSearch = bool => dispatch => {
  dispatch({
    type: Types.SHOW_SEARCH,
    payload: bool
  });
};

export const searchMovies = searchTerm => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${searchTerm}`
  );
  if (res.data) {
    console.log(res.data);
  }
  dispatch({
    type: Types.SEARCH_MOVIES,
    payload: res.data.results
  });
};

export const getMovieById = id => async dispatch => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
  dispatch({
    type: Types.GET_MOVIE_BY_ID,
    payload: res.data,
  })
}
