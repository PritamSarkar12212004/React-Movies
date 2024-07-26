import React, { useContext } from "react";
import Movie from "./Movie";
import ContextMaker from "../../context/ContextMaker";
function Movies() {
  const { movies } = useContext(ContextMaker);

  return (
    <div className="w-full h-[70vh] md:h-[50vh] mt-2 px-3 flex gap-5 overflow-x-auto scrollbar-hide">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
