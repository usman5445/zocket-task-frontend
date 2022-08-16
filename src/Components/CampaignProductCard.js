import React from "react";
import TickIcon from "../Icons/tick-circle.svg";
import ThumbIcon from "../Icons/thumb.svg";
function CampaignProductCard({
  title,
  disc,
  profileImg,
  mainImg,
  isActive,
  onClick,
}) {
  return (
    <div
      onClick={() => onClick()}
      className={`relative p-4 border cursor-pointer rounded-xl flex flex-col space-y-4 ${
        isActive && " border-blue-500"
      }`}
    >
      <div className="flex space-x-2 items-center">
        <img
          src={profileImg}
          className="w-10 h-10 rounded-full object-cover"
          alt=""
        />
        <div>
          <p className="font-bold text-blue-500">{title}</p>
          <p className="text-gray-500">Sponsored</p>
        </div>
      </div>
      <p>{disc}</p>
      <div className=" rounded-lg overflow-hidden">
        <img className="w-full object-cover  h-28" src={mainImg} alt="" />
        <div className="flex py-2 justify-between items-center bg-gray-200 px-2 ">
          <p className="font-bold text-blue-500">{title}</p>
          <button className="py-1 px-4 flex space-x-2 items-center  rounded-lg border border-black">
            <img src={ThumbIcon} alt="" />
            <span>Like</span>
          </button>
        </div>
      </div>
      {isActive && (
        <img src={TickIcon} className="absolute right-0 -top-2" alt="" />
      )}
    </div>
  );
}

export default CampaignProductCard;
