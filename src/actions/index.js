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
