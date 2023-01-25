import React from "react";

const RepositoryDetail = ({ repository }) => {
  const { name, description, forks_count, stargazers_count, language } =
    repository;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Forks: {forks_count}</p>
      <p>Stars: {stargazers_count}</p>
      <p>Language: {language}</p>
    </div>
  );
};

export default RepositoryDetail;
