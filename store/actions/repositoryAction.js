import { FETCH_REPOSITORIES, FETCH_REPOSITORY } from "./actionTypes";
import {
  fetchRepositories as fetchRepositoriesApi,
  fetchRepository as fetchRepositoryApi,
} from "../../utils/api";

export const fetchRepositories = (query) => async (dispatch) => {
  try {
    const data = await fetchRepositoriesApi(query);
    dispatch({ type: FETCH_REPOSITORIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchRepository = (owner, repo) => async (dispatch) => {
  try {
    const data = await fetchRepositoryApi(owner, repo);
    dispatch({ type: FETCH_REPOSITORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
