import React, { useState } from "react";
import HomeIcon from "../Icons/Group 17484.svg";
import CampaignIcon from "../Icons/Group 17483.svg";
import ProductsIcon from "../Icons/Group 17481.svg";
import CustomersIcon from "../Icons/Group 17482.svg";
import HomeIconActive from "../Icons/house.svg";
import CampaignIconActive from "../Icons/volume-high.svg";
import ProductsIconActive from "../Icons/bag.svg";
import CustomersIconActive from "../Icons/profile-2user.svg";
import LogoIcon from "../Icons/Logo.svg";
import { SidebarBtn } from "./Sidebar-btn";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const [isActive, setIsActive] = useState([true, false, false, false]);
  const navigate = useNavigate();
  return (
    <div className="pt-12 relative  bg-dark-blue w-20 h-full flex flex-col items-center">
      <img src={LogoIcon} alt="" />
      <div className="flex flex-col my-8 w-full ">
        <SidebarBtn
          icon={HomeIcon}
          title={"Home"}
          activeIcon={HomeIconActive}
          isActive={isActive[0]}
          setIsActive={() => {
            setIsActive([true, false, false, false]);
            navigate("/");
          }}
        />
        <SidebarBtn
          icon={CampaignIcon}
          title={"Campaign"}
          activeIcon={CampaignIconActive}
          isActive={isActive[1]}
          setIsActive={() => {
            setIsActive([false, true, false, false]);
            navigate("/campaigns");
          }}
        />
        <SidebarBtn
          icon={ProductsIcon}
          title={"Product"}
          activeIcon={ProductsIconActive}
          isActive={isActive[2]}
          setIsActive={() => {
            setIsActive([false, false, true, false]);
            navigate("/products");
          }}
        />
        <SidebarBtn
          icon={CustomersIcon}
          title={"Customer"}
          activeIcon={CustomersIconActive}
          isActive={isActive[3]}
          setIsActive={() => {
            setIsActive([false, false, false, true]);
            navigate("/customers");
          }}
        />
      </div>
    </div>
  );
}

export default Sidebar;
