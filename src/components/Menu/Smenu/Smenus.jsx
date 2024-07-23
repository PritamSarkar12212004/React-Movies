import React from "react";
import Smenu from "./Smenu";
import ContextMaker from "../../../context/ContextMaker";
function Smenus() {
  const { theme } = React.useContext(ContextMaker);
  const data = [
    {
      Title: "Anime",
      urls: [
        "https://i.pinimg.com/736x/06/71/06/0671061c5641b3f01f5fff2d13725af8.jpg",
        "https://i.pinimg.com/564x/64/4f/b2/644fb296164876634c914ecad95a2aaa.jpg",
        "https://i.pinimg.com/564x/27/5b/75/275b755ee3ba6c4fe24d847c624e5dd4.jpg",
        "https://i.pinimg.com/564x/f1/ce/38/f1ce383c627dd685a4c73ef71ad2262b.jpg",
        "https://i.pinimg.com/736x/47/b6/04/47b6041587d1918dd68700ff2ee08499.jpg",
        "https://i.pinimg.com/564x/c2/0a/ba/c20aba2f6d649454fab7edbbd2c4c72a.jpg",
      ],
    },
    {
      Title: "Movie",
      urls: [
        "https://i.pinimg.com/564x/e0/e5/08/e0e50869fd78464ac26cd0ff2226cb08.jpg",
        "https://i.pinimg.com/564x/9d/05/77/9d0577b90479201564dea7c97b4f2068.jpg",
        "https://i.pinimg.com/564x/48/c4/9f/48c49f66a2731471935709377d59d5d5.jpg",
        "https://i.pinimg.com/564x/5e/dc/f1/5edcf1ca1d72f9da1302a440be575b2f.jpg",
        "https://i.pinimg.com/564x/37/99/d5/3799d5319cae72fccb5f69b7b6c6a4c5.jpg",
        "https://i.pinimg.com/564x/58/47/19/584719b3904efc4961d01f04cd9ac623.jpg",
      ],
    },
    {
      Title: "Web Series",
      urls: [
        "https://i.pinimg.com/736x/b8/69/07/b869075f8960095eeee5c026ece43cce.jpg",
        "https://i.pinimg.com/736x/d1/1d/fe/d11dfe810f7cf31cb24e0637f39c0f3d.jpg",
        "https://i.pinimg.com/564x/16/ae/a6/16aea642f61e589871b12004b72be824.jpg",
        "https://i.pinimg.com/564x/da/ee/3b/daee3ba74ae00a17bd4f86f3c200980b.jpg",
        "https://i.pinimg.com/736x/09/23/f5/0923f55629e8c5860044bddf5d3cafef.jpg",
        "https://i.pinimg.com/564x/b1/fd/c0/b1fdc00a74f5ee6e7e8a901f74dff1ed.jpg",
      ],
    },
  ];
  return (
    <div
      className={`w-full h-[92.8vh] md:h-[92.8vh]  fixed bottom-0 z-10 ${
        theme ? "bg-black " : "bg-white"
      } px-5 py-5 flex flex-col gap-5 overflow-y-scroll `}
    >
      {data.map((item, index) => (
        <Smenu key={index} item={item} data={item} />
      ))}
    </div>
  );
}

export default Smenus;
