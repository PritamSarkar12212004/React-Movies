import React from "react";

function ProductsMovies(prop) {
  const { Url } = prop;
  return (
    <div className=" w-full">
      <div className="  w-32 md:w-40 ">
        <img
          src={Url}
          alt=""
          className="h-40 w-full rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ProductsMovies;
