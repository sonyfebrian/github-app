import React from "react";
import Link from "next/link";

const RepositoryList = ({ repositories }) => {
  return (
    <ul>
      {repositories.map((repository) => (
        <li key={repository.id}>
          <Link
            href={`/repository?owner=${repository.owner.login}&repo=${repository.name}`}
          >
            <a>{repository.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RepositoryList;
