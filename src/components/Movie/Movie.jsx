import React from "react";

function Movie(prop) {
  const {movie}=prop
  return (
    <img
      src={movie.image}
      className=" rounded-xl w-full h-full"
      alt=""
    />
  );
}

export default Movie;
