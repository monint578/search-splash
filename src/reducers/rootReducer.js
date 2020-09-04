import { ADD_QUERY, DELETE_QUERY } from "../actions/actions";

const initState = {
  queries: [
  ],
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_QUERY:
      if (
        state.queries.filter((query) => query.title === action.title).length >
        0 || !action.title
      ) {
        return state;
      }
      return {
        ...state,
        queries: state.queries.concat({ title: action.title }),
      };
    case DELETE_QUERY:
      return {
        queries: state.queries.filter(
          (query) => query.title !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
