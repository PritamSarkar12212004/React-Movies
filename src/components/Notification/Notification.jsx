import React from "react";

function Notification(prop) {
  const { item } = prop;
  const { id, title, description, date, time } = item;
  return (
    <div className="w-full flex border-b-[2px] py-2 border-gray-700  relative  ">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center mr-3">
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
