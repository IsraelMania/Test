import React, { useState } from "react";
import PropTypes from "prop-types";
import Mag from "../../../assets/mag.png";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Escreva aqui a sua busca"
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearchClick} className="search-button">
        <img src={Mag} alt="Search" className="search-icon" />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
