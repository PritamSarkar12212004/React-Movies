import React, { useContext } from "react";
import ContextMaker from "../../context/ContextMaker";
function Category(prop) {
  const { theme, setTheme } = useContext(ContextMaker);

  const { category } = prop;
  return (
    <div>
      <button
        className={`px-3 py-1 ${
          theme ? "bg-zinc-900" : "bg-white"
        } bg-opacity-60 text-nowrap backdrop-blur-sm rounded-full`}
      >
        {category}
      </button>
    </div>
  );
}

export default Category;
