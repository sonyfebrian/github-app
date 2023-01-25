import React from "react";

const SearchInput = ({ value, onChange, onSearch }) => {
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a repository"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
