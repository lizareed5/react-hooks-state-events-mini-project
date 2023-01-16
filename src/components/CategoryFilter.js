import React from "react";

function CategoryFilter({categories, handleSelectedCategory, selectedCategory}) {

  const cateBtn = categories.map(category => (<button
  key={category}
  className = {category === selectedCategory ? "selected" : null}
  onClick={() => handleSelectedCategory(category)}
  >{category}</button>))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {cateBtn}
    </div>
  );
}

export default CategoryFilter;
