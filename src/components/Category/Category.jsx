import React from "react";

function Category(prop) {
  const { category } = prop;
  return (
    <div>
      <button className="px-3 py-1 bg-zinc-900 bg-opacity-60 text-nowrap backdrop-blur-sm rounded-full">
        {category}
      </button>
    </div>
  );
}

export default Category;
