import { FETCH_REPOSITORIES } from "./actionTypes";

export const setRepositories = (data) => {
  return {
    type: FETCH_REPOSITORIES,
    payload: data,
  };
};
