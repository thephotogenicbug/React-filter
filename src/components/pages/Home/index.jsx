import React, { useState } from "react";
import FilterPanel from "../../Home/FilterPanel";
import List from "../../Home/List";
import SearchBar from "../../Home/SearchBar";
import "./styles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  return (
    <div className="home">
      {/* Search bar */}
      <SearchBar />

      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* Side panels */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="home_list-wrap">
          {/* List & Empty View  */}
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
