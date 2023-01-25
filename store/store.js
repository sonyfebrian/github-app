import { createStore, combineReducers } from "redux";
import repositoryReducer from "@reducers/repositoryReducer";

const rootReducer = combineReducers({
  repositories: repositoryReducer,
});

const store = createStore(rootReducer);

export default store;
