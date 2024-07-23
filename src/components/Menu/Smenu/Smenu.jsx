import React from "react";

function Smenu(prop) {
  const { item } = prop;
  const { Title, urls } = item;

  return (
    <div className="w-full  ">
      <h1 className="text-xl md:text-2xl">{Title}</h1>
      <div className=" mt-4 flex w-full  gap-3 flex-wrap jus">
        {urls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Smenu;
