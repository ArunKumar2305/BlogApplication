import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-center p-4 bg-white mt-[8px] ">
      <input
        type="text"
        className="w-[650px] p-2 border border-gray-300 rounded-md"
        placeholder="Search services or profiles..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
