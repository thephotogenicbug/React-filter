import React from "react";
import { categoryList, ratingList } from "../../../constants";
import CheckBoxProton from "../../common/CheckBoxProton";
import FilterListToggle from "../../common/FilterListToggle";
import SliderProton from "../../common/SliderProton";
import "./styles.css";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cusines,
  changeChecked,
  changedPrice,
  selectedPrice,
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
        {cusines.map((cuisine) => (
          <CheckBoxProton
            key={cuisine.id}
            changeChecked={changeChecked}
            cuisine={cuisine}
          />
        ))}
      </div>
      {/* price range  */}
      <div className="input-group">
        <p className="label-range">Cusines</p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>
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
