import React, { useContext } from "react";
import Notification from "./Notification";
import ContextMaker from "../../context/ContextMaker";

function Notifications() {
  const { theme } = useContext(ContextMaker);

  const data = [
    {
      id: 1,
      title: "Tiger Jinda hai",
      description: "Full action by Salman khan",
      date: "2024-02-11",
      time: "10:00 AM",
      color: "#eab69d",
    },
    {
      id: 2,
      title: "Tare Asman Pr",
      description: "Cute Chld Acting",
      date: "2021-11-3",
      time: "10:13 PM",
      color: "#ae6ff7",
    },
    {
      id: 3,
      title: "Pushpa 2",
      description: "Letest move of Pushpa",
      date: "2025-02-1",
      time: "11:047 AM",
      color: "#afdd5f",
    },
    {
      id: 4,
      title: "Captail Anmeria",
      description: "Marvel new movie",
      date: "2025-2-15",
      time: "1:00 PM",
      color: "#7f8bd8",
    },
    {
      id: 5,
      title: "kalki 2",
      description: "Letest Part of Kalki ",
      date: "2025-2-15",
      color: "#af3bd6",
    },
  ];
  return (
    <div className={`w-full h-[40vh] ${theme? "bg-zinc-900" :"bg-gray-100"} px-3 py-3 rounded-xl m-3  overflow-y-auto`}>
      {data.map((item) => {
        return <Notification key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Notifications;
