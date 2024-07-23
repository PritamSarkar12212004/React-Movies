import React from "react";
import SemiContent from "./SemiContent";
import { FaChevronRight } from "react-icons/fa6";

function SemiContants() {
  const data = [
    "https://v3img.voot.com/resizeMedium,w_1920,h_1080/v3Storage/assets/16x9cta-1721669763021.jpg",
    "https://v3img.voot.com/resizeMedium,w_1920,h_1080/v3Storage/assets/hotd-16x9-1719339485443.jpg",
  ];
  return (
    <div className="w-full bg-zinc-600n  mt-7 ">
      <h1 className="text-xl w-full flex justify-between items-center px-5 md:text-2xl">
        Top Movies <FaChevronRight />
      </h1>
      <div className="w-full flex overflow-x-scroll scrollbar-hide gap-3  mt-5 pl-3">
        {data.map((item, index) => {
          return <SemiContent key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default SemiContants;
