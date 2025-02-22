import React, { useState } from "react";
import "./AppHeader.css";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";

const AppHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log(`Searching for: ${searchQuery}`);
      // هنا يمكن إضافة وظيفة البحث الفعلي
    }
  };

  return (
    <header className="app-header">
      <div className="app-logo">
        <Link to="/user/home">Matjari</Link>
      </div>
      <div className="app-dropdown">
        <button className="app-dropbtn">
          <FaBars size={24} />
        </button>
        <div className="app-dropdown-content">
          <Link to="/">Help</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>

      {/* البحث */}
      <div className="app-search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="app-search-input"
        />
        <button onClick={handleSearch} className="app-search-button">
          <FaSearch size={20} />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
