import React, { useContext } from "react";
import ContextMaker from "../../context/ContextMaker";
function Notification(prop) {
  const { theme } = useContext(ContextMaker);
  const { item } = prop;
  const { id, title, description, date, color } = item;
  return (
    <div
      className={`w-full flex border-b-[2px] py-2 ${theme? "border-gray-700 ":'border-gray-300'} relative `}
    >
      <div
        className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center mr-3`}
        style={{ backgroundColor: color }}
      >
        <h1 className="text-2xl">{id}</h1>
      </div>
      <div>
        <h2 className="text-xl">{title}</h2>
        <p className=" text-wrap">{description}</p>
      </div>
      <h4 className="text-sm text-red-500 absolute right-0">{date}</h4>
    </div>
  );
}

export default Notification;
