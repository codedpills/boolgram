import React, { useState } from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const SearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div
      className="search-bar"
      onClick={(e) => {
        setShowInput(true);
      }}
      onBlur={(e) => setShowInput(false)}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search"
          autoFocus
          className="search-bar__input"
        />
      ) : (
        <button className="search-bar__button">
          <SearchIcon /> Search
        </button>
      )}
    </div>
  );
};

export default SearchBar;
