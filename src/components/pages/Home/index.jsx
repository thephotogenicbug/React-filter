import React, { useState } from "react";
import FilterPanel from "../../Home/FilterPanel";
import List from "../../Home/List";
import SearchBar from "../../Home/SearchBar";
import "./styles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [cusines, setCusines] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chinese",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cuisinesStateList = cusines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked:!item.checked } : item
    );
    setCusines(changeCheckedCuisines);
  };
  

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
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            cusines={cusines}
            changeChecked={handleChangeChecked}
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
