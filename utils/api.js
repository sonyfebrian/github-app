import axios from "axios";

const baseURL = "https://api.github.com";

export const fetchRepositories = async (query) => {
  const url = `${baseURL}/search/repositories?q=${query}`;
  const { data } = await axios.get(url);
  return data.items;
};

export const fetchRepository = async (owner, repo) => {
  const url = `${baseURL}/repos/${owner}/${repo}`;
  const { data } = await axios.get(url);
  return data;
};
