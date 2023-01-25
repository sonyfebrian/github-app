import React, { useState } from "react";
import { connect } from "react-redux";
import RepositoryList from "../components/RepositoryList";
import { fetchRepositories } from "../store/actions/repositoryActions";
import SearchInput from "../components/SearchInput";

function HomePage({ repositories, fetchRepositories }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    fetchRepositories(searchValue);
  };

  return (
    <div>
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        onSearch={handleSearch}
      />
      <RepositoryList repositories={repositories} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    repositories: state.repositories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepositories: (query) => dispatch(fetchRepositories(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
