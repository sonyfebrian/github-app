import React from "react";
import moment from "moment";

function RepositoryList({ name, language, updated_at, html_url, description }) {
  return (
    <div>
      <div className="text-gray-900 capitalize font-bold text-2xl">{name}</div>
      <p>
        <a
          href={html_url}
          class="text-xs text-blue-600 dark:text-blue-500 hover:underline"
        >
          {html_url}
        </a>
      </p>
      <hr className="my-4 w-full" />
      <p className="text-sm mt-4">Description:</p>
      {description ? (
        <span className="text-gray-500"> {description}</span>
      ) : (
        <span className="text-gray-500"> None </span>
      )}
      <hr className="my-4" />
      <div className="mt-4">
        <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
          {language}
        </span>
        <span class="bg-purple-200 text-purple-600 py-1 px-3 mx-4 rounded-full text-xs">
          Updated {moment(updated_at, "YYYYMMDD").fromNow()}
        </span>
      </div>
    </div>
  );
}

export default RepositoryList;
