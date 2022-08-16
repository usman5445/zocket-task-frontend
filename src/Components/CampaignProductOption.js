import React from "react";
import TickIcon from "../Icons/tick-circle.svg";
function CampaignProductOption({ img, title, rate, isActive, onClick, key }) {
  return (
    <div
      key={key}
      onClick={() => onClick()}
      className={`relative p-4 border items-center cursor-pointer rounded-lg flex space-x-4 ${
        isActive && "bg-blue-100 border-blue-500"
      }`}
    >
      <img className="w-12 h-12 rounded-lg" src={img} alt="" />
      <div>
        <p>{title}</p>
        <span className="text-sm text-gray-400">Rs: {rate}</span>
      </div>
      {isActive && (
        <img src={TickIcon} className="absolute right-2 top-1/3" alt="" />
      )}
    </div>
  );
}

export default CampaignProductOption;
