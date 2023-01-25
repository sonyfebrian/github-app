const initialState = [];

const repositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REPOSITORIES":
      return action.payload;
    default:
      return state;
  }
};

export default repositoryReducer;
