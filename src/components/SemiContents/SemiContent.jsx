import React from "react";

function SemiContent(props) {
  const { item } = props;
  return (
    <div className=" w-full">
      <div className=" w-72 md:w-80">
        <img src={item} alt="" className="h-40 md:h-48 w-full rounded-lg" />
      </div>
    </div>
  );
}

export default SemiContent;
