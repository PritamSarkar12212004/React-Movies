import React from "react";

function Studio(prop) {
  const { img } = prop;
  return (
    <div className="w-full h-20 md:h-24  rounded-lg mb-3">
      <div className="w-20 md:w-24 h-full bg-gray-700 rounded-lg  ">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Studio;
