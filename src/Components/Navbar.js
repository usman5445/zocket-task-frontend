import React from "react";
import TranslateIcon from "../Icons/Group 16633.svg";
import ThroneIcon from "../Icons/444 1.svg";
import GiftIcon from "../Icons/gift.svg";
import NotificationIcon from "../Icons/notification.svg";
import ShopImg from "../Icons/unsplash_hWQvZaN7jnQ.svg";
function Navbar() {
  return (
    <div className="h-16 bg-white w-full shadow flex items-center space-x-4 justify-end px-8 ">
      <p className="text-sm font-extralight text-gray-500">
        Free trial ends in 2 days
      </p>
      <button className="flex justify-center items-center space-x-1 text-sm font-extralight text-[#FF8C00] p-2 rounded hover:bg-[rgba(242,154,46,0.28)] bg-[rgba(242,154,46,0.1)]">
        <img src={ThroneIcon} alt="" /> <span> Buy Plan</span>
      </button>
      <img src={GiftIcon} alt="" />
      <img src={NotificationIcon} alt="" />
      <img src={ShopImg} alt="" />
      <p className="text-base text-gray-600">Mukund cake shop</p>
      <img src={TranslateIcon} alt="" />
    </div>
  );
}

export default Navbar;
