import React from "react";
import Category from "../Category/Category";

function SubNav() {
  const categories = [
    "All",
    "Web Development",
    "App Development",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Cyber Security",
    "Blockchain",
    "Game Development",
    "UI/UX Design",
    "Digital Marketing",
    "Content Writing",
    "Video Editing",
    "Graphic Design",
    "Music Production",
    "Photography",
    "3D Modeling",
    "Animation",
  ];

  return (
    <div className="w-full flex overflow-x-auto scrollbar-hide gap-3 overflow-y-hidden">
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
}

export default SubNav;
