import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import RepositoryDetail from "../components/RepositoryDetail";
import { fetchRepository } from "../store/actions/repositoryActions";

function RepositoryPage({ repository, fetchRepository }) {
  const router = useRouter();
  const { owner, repo } = router.query;

  useEffect(() => {
    fetchRepository(owner, repo);
  }, []);

  return (
    <div>
      {repository ? (
        <RepositoryDetail repository={repository} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    repository: state.repository,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepository: (owner, repo) => dispatch(fetchRepository(owner, repo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryPage);
