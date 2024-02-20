// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={handleChange}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
