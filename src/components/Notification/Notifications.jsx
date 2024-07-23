import React from "react";
import Notification from "./Notification";
function Notifications() {
  const data = [
    {
      id: 1,
      title: "Tiger Jinda hai",
      description: "Full action by Salman khan",
      date: "2024-02-11",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Tare Asman Pr",
      description: "Cute Chld Acting",
      date: "2021-11-3",
      time: "10:13 PM",
    },
    {
      id: 3,
      title: "Pushpa 2",
      description: "Letest move of Pushpa",
      date: "2025-02-1",
      time: "11:047 AM",
    },
    {
      id: 4,
      title: "Captail Anmeria",
      description: "Marvel new movie",
      date: "2025-2-15",
      time: "1:00 PM",
    },
    {
      id: 5,
      title: "kalki 2",
      description: "Letest Part of Kalki ",
      tile: "2025-2-15",
    },
  ];
  return (
    <div className="w-full h-[40vh] bg-zinc-900 px-3 py-3 rounded-xl m-3  overflow-y-auto">
      {data.map((item) => {
        return <Notification key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Notifications;
