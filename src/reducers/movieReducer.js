import * as TYPES from "../actions/types";

const INITIAL_STATE = {
    movie: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case TYPES.GET_MOVIE_BY_ID:
          return {
              ...state,
              movie: action.payload
          }
    default: {
      return state;
    }
  }
};
