import * as TYPES from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  movies: [],
  genres: [],
  selectedFilter: [],
  allMovies: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(state.selectedFilter);
  switch (action.type) {
    case TYPES.GET_TRENDING:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        allMovies: action.payload
      };
    case TYPES.GET_GENRES:
      return {
        ...state,
        loading: false,
        genres: action.payload
      };
    case TYPES.FILTER_MOVIES:
      return {
        ...state,
        loading: false,
        movies: state.movies.filter(movie =>
          movie.genre_ids.includes(action.payload.genreId)
        ),
        selectedFilter: [
          ...state.selectedFilter,
          { value: action.payload.value, id: action.payload.genreId }
        ]
      };
    case TYPES.RETURN_MOVIES:
      return {
        ...state,
        movies: state.movies
      };
    case TYPES.REMOVE_FILTER:
      let newMovies;
      const toRemove = state.selectedFilter.length - 1;
      if (state.selectedFilter.length > 1) {
        newMovies = state.movies.filter(
          movie => !movie.genre_ids.includes(state.selectedFilter[toRemove].id)
        );
      } else {
        newMovies = state.allMovies;
      }
      return {
        ...state,
        selectedFilter: state.selectedFilter.filter(
          selected => selected !== action.payload
        ),
        movies: newMovies
      };
    default: {
      return state;
    }
  }
};
