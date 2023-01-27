import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import _ from "lodash";
import { setRepositories } from "../store/actions/repositoryActions";
import RepositoryList from "./RepositoryList";

export default function Profil() {
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repositories.data);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/sonyfebrian/repos")
      .then((response) => {
        setUser(response.data[0].owner);
        dispatch(setRepositories(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      <div className="bg-gray-100 pt-5">
        <h1 className="mb-10 text-center text-2xl font-bold">
          My Github Repository
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <img
              src={user.avatar_url}
              alt="product-image"
              className="object-cover w-72 h-40 rounded"
            />
            <hr className="mt-6" />
            <p className="text-2xl mt-1">{user.login}</p>
            <p>
              {" "}
              <a
                href={user.html_url}
                class="text-xs text-blue-600 dark:text-blue-500 hover:underline"
              >
                {user.html_url}
              </a>
            </p>
          </div>
          <div className="rounded-lg md:w-2/3">
            {_.map(repositories, (repo) => (
              <div className=" mb-6 rounded-lg bg-white p-6 shadow-md ">
                <RepositoryList key={repo.id} {...repo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
