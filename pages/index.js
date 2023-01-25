import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepositories } from "../store/actions/repositoryActions";

import RepositoryList from "../components/RepositoryList";

function HomePage() {
  const repositories = useSelector((state) => state.repositories);
  const dispatch = useDispatch();

  return (
    <div>
      <RepositoryList repositories={repositories} />
    </div>
  );
}

export default HomePage;
