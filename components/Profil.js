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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          {" "}
          <h1 className="text-center text-2xl font-bold">
            My Github Repository
          </h1>
          <div className="flex flex-col items-center text-center group  md:lg:xl:border-b  cursor-pointer">
            <img
              src={user.avatar_url}
              alt="product-image"
              className="object-cover w-40 h-40 rounded-full"
            />
            <p className="text-xl font-medium text-slate-700 mt-3">
              {user.login}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              <a
                href={user.html_url}
                className="text-xs text-blue-600 dark:text-blue-500 hover:underline"
              >
                {user.html_url}
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="pt-5">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-3/3">
            {_.map(repositories, (repo) => (
              <div className="mb-6 rounded-lg bg-white p-6 shadow-md ">
                <RepositoryList key={repo.id} {...repo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
