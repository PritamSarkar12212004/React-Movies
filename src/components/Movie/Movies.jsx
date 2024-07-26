import React from "react";
import Movie from "./Movie";
function Movies() {
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      description: "This is the description for Movie 1.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/mlc_highlights_vertical_carousel-1721020413009.jpg",
    },
    {
      id: 2,
      title: "Movie 2",
      description: "This is the description for Movie 2.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/top_10_vertical_carousel-1720645133122.jpg",
    },
    {
      id: 3,
      title: "Movie 3",
      description: "This is the description for Movie 3.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/vertical-mobile-1720069024862.jpg",
    },
    {
      id: 4,
      title: "Movie 4",
      description: "This is the description for Movie 4.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/mobile-1721470487231.jpg",
    },
    {
      id: 5,
      title: "Movie 5",
      description: "This is the description for Movie 5.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/vertical-mobile-1720616655818.jpg",
    },
  ];
  return (
    <div className="w-full h-[70vh] md:h-[50vh] mt-2 px-3 flex gap-5 overflow-x-auto scrollbar-hide">
          { movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
