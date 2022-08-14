import React from "react";
import TickIcon from "../Icons/tick-circle.svg";
function CampaignOption({ icon, activeIcon, title, dis, isActive, onClick }) {
  return (
    <div
      onClick={() => onClick()}
      className={`relative p-4 border cursor-pointer rounded-lg flex space-x-4 ${
        isActive && "bg-blue-100 border-blue-500"
      }`}
    >
      <img className="w-6" src={isActive ? activeIcon : icon} alt="" />
      <div>
        <p>{title}</p>
        <span className="text-sm text-gray-400">{dis}</span>
      </div>
      {isActive && (
        <img src={TickIcon} className="absolute -right-2 -top-2" alt="" />
      )}
    </div>
  );
}

export default CampaignOption;
