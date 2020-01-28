import * as TYPES from "../actions/types";
import { sortAlphabetically } from "../utils/sortAlphabetically";

const INITIAL_STATE = {
  loading: true,
  movies: [],
  genres: [],
  selectedFilter: [],
  allMovies: [],
  showSearch: false,
  favourites: [],
  showToaster: false,
  message: ""
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
    case TYPES.SORT_AZ:
      const sortedMovies = state.movies.sort(
        sortAlphabetically("title", "asc")
      );
      return {
        ...state,
        movies: [...sortedMovies]
      };
    case TYPES.SORT_ZA:
      const backwardsMovies = state.movies.sort(
        sortAlphabetically("title", "desc")
      );
      return {
        ...state,
        movies: [...backwardsMovies]
      };
    case TYPES.SHOW_SEARCH:
      return {
        ...state,
        showSearch: action.payload
      };
    case TYPES.SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case TYPES.GET_FAVOURITES:
      return {
        ...state,
        movies: state.favourites
      };
    case TYPES.ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case TYPES.SHOW_TOASTER:
      return {
        ...state,
        showToaster: true,
        message: action.payload
      };
    case TYPES.REMOVE_TOASTER:
      return {
        ...state,
        showToaster: false,
        message: ""
      };
    default: {
      return state;
    }
  }
};
