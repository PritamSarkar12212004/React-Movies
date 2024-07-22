import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import ProductsMovies from "./ProductsMovies";
function ProductHold(prop) {
  const { datas } = prop;
  return (
    <div>
      <div className="w-full bg-zinc-600n  mt-7 ">
        <h1 className="text-xl w-full flex justify-between items-center px-5">
          {datas.title}
          <FaChevronRight />
        </h1>
        <div className="w-full flex overflow-x-scroll scrollbar-hide gap-3  mt-5 pl-3">
          {datas.data.map((item,index) => (
            <ProductsMovies key={index} Url={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductHold;
