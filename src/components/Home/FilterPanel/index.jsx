import React from 'react'
import { categoryList } from '../../../constants';
import FilterListToggle from '../../common/FilterListToggle'

const FilterPanel = ({selectedCategory, selectToggle}) => {
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
        {/* price range  */}
        {/* star rating  */}
      </div>
    );
}

export default FilterPanel
