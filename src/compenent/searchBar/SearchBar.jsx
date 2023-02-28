import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className='search-container'>
      <input
        className='search-input'
        type='text'
        placeholder="Kesqu'on cherche ?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
