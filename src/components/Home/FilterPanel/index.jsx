import React from "react";
import { categoryList, ratingList } from "../../../constants";
import CheckBoxProton from "../../common/CheckBoxProton";
import FilterListToggle from "../../common/FilterListToggle";
import "./styles.css";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cusines,
  changeChecked
 
}) => {
  return (
    <div>
      {/* Category   */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Cusines  */}
      <div className="input-group">
        <p className="label">Cusines</p>
        {cusines.map((cuisine) => (
          <CheckBoxProton
            key={cuisine.id}
            changeChecked={changeChecked}
            cuisine={cuisine}
          />
        ))}
      </div>
      {/* price range  */}
      {/* star rating  */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
