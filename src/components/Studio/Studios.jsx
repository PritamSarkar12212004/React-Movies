import React from "react";
import Studio from "./Studio";

function Studios() {
  const img = [
    "Studio/cn.jpg",
    "Studio/cr.jpg",
    "Studio/dc.jpg",
    "Studio/dp.jpg",
    "Studio/marvel.jpg",
    "Studio/tb.jpg",
    "Studio/wb.jpg",
    "Studio/wd.jpg",
  ];
  return (
    <div className="w-full h-full flex overflow-x-scroll scrollbar-hide mt-10 gap-3 px-6">
      {img.map((img, index) => (
        <Studio key={index} img={img} />
      ))}
    </div>
  );
}

export default Studios;
