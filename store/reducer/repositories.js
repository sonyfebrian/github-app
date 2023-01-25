import { FETCH_REPOSITORIES } from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const repositories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default repositories;
