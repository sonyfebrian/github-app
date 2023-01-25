import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setRepositories } from "../store/actions/repositoryActions";

function RepositoryList() {
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repositories.data);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/sonyfebrian/repos")
      .then((response) => {
        dispatch(setRepositories(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  console.log(repositories, "cek repo");
  return (
    <div>
      <h1>My Repositories</h1>
      <ul>
        {repositories.map((repository) => (
          <li key={repository.id}>
            <a href={repository.html_url}>{repository.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
