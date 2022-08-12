import React from "react";

export const SidebarBtn = ({
  icon,
  activeIcon,
  title,
  isActive,
  setIsActive,
}) => {
  return (
    <button
      onClick={() => setIsActive()}
      className={`flex hover:bg-light-blue p-4 hover:border-l-4 border-blue-500 text-white flex-col justify-center items-center ${
        isActive && "bg-light-blue border-l-4"
      }`}
    >
      <img className="w-6 " src={!isActive ? icon : activeIcon} alt="" />
      <p className="my-2 text-sm ">{title}</p>
    </button>
  );
};
