import * as TYPES from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  movies: [],
  genres: [],
  selectedFilter: [],
  allMovies: []
};

export default (state = INITIAL_STATE, action) => {
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
      const remainingFilters = state.selectedFilter.filter(
        filter => filter.id !== action.payload.id
      );
      let newMovies = [];
      state.allMovies.map(movie => {
        if (state.selectedFilter.length === 1) {
          newMovies = [...state.allMovies];
        } else {
          remainingFilters.map(rf => {
            const index = movie.genre_ids.indexOf(rf.id);
            if (index !== -1) {
              newMovies.push(movie);
            }
            return newMovies;
          });
        }
        return newMovies;
      });
      return {
        ...state,
        selectedFilter: state.selectedFilter.filter(
          selected => selected.id !== action.payload.id
        ),
        movies: newMovies
      };
    default: {
      return state;
    }
  }
};
