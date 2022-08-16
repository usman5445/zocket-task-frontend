import React, { useState } from "react";
import ActiveCallIcon from "../Icons/Frame-2.svg";
import CallIcon from "../Icons/Frame-1.svg";
import ActiveMsgIcon from "../Icons/Frame-4.svg";
import MsgIcon from "../Icons/Frame-3.svg";
import ActivePepleIcon from "../Icons/Frame-7.svg";
import PepleIcon from "../Icons/Frame-6.svg";
import ActiveShopIcon from "../Icons/Frame-9.svg";
import ShopIcon from "../Icons/Frame-8.svg";
import ActiveEyeIcon from "../Icons/Frame-11.svg";
import EyeIcon from "../Icons/Frame-10.svg";
import ActiveDownIcon from "../Icons/Frame-13.svg";
import DownIcon from "../Icons/Frame-12.svg";
import ActiveArrowIcon from "../Icons/Frame-15.svg";
import ArrowIcon from "../Icons/Frame-14.svg";
import ActivePadIcon from "../Icons/Frame-17.svg";
import PadIcon from "../Icons/Frame-16.svg";
import ActiveUserIcon from "../Icons/Frame.svg";
import UserIcon from "../Icons/Frame-5.svg";
import CampaignOption from "../Components/CampaignOption";
import { useNavigate } from "react-router-dom";
function CampaignsNewS1Page({ setSteps, setData, data }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(0);
  const platformArr = [
    "Google",
    "Facebook",
    "Facebook",
    "Facebook",
    "Youtube",
    "Instagram",
    "Google",
    "Youtube",
    "Google",
  ];

  return (
    <div className="bg-white text-start p-4 border rounded-lg flex flex-col relative">
      <div>
        <span className="font-bold">What you want to do?</span>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-3 grid-rows-3 gap-3 ">
        <CampaignOption
          icon={CallIcon}
          activeIcon={ActiveCallIcon}
          isActive={selectedOption == 0}
          onClick={() => setSelectedOption(0)}
          title="Get Leads as calls"
          dis="Reach broad audience and get leads through calls"
        />
        <CampaignOption
          icon={MsgIcon}
          activeIcon={ActiveMsgIcon}
          isActive={selectedOption == 1}
          onClick={() => setSelectedOption(1)}
          title="Get Leads as Facebook messages"
          dis="Get more FB messages from Leads"
        />
        <CampaignOption
          icon={UserIcon}
          activeIcon={ActiveUserIcon}
          isActive={selectedOption == 2}
          onClick={() => setSelectedOption(2)}
          title="Increase page followers"
          dis="Encourage customers to follow your page"
        />
        <CampaignOption
          icon={PepleIcon}
          activeIcon={ActivePepleIcon}
          isActive={selectedOption == 3}
          onClick={() => setSelectedOption(3)}
          title="Get Customer Leads"
          dis="Encourage customers to take action"
        />
        <CampaignOption
          icon={EyeIcon}
          activeIcon={ActiveEyeIcon}
          isActive={selectedOption == 4}
          onClick={() => setSelectedOption(4)}
          title="Get more youtube views"
          dis="Increase organic views by obtaining user attention "
        />
        <CampaignOption
          icon={ArrowIcon}
          activeIcon={ActiveArrowIcon}
          isActive={selectedOption == 5}
          onClick={() => setSelectedOption(5)}
          title="Get more website traffic"
          dis="Get the right people to visit your website"
        />
        <CampaignOption
          icon={ShopIcon}
          activeIcon={ActiveShopIcon}
          isActive={selectedOption == 6}
          onClick={() => setSelectedOption(6)}
          title="Increase Live store traffic"
          dis="Drive visits to local stores, restaurants & Dealerships"
        />
        <CampaignOption
          icon={DownIcon}
          activeIcon={ActiveDownIcon}
          isActive={selectedOption == 7}
          onClick={() => setSelectedOption(7)}
          title="Increase your App installs"
          dis="Get more installs, interactions for your app"
        />
        <CampaignOption
          icon={PadIcon}
          activeIcon={ActivePadIcon}
          isActive={selectedOption == 8}
          onClick={() => setSelectedOption(8)}
          title="Increase the catalogue sales"
          dis="Drive the sales of your catalogue and get more leads"
        />
      </div>
      <div className="self-end">
        <button
          onClick={() => {
            navigate("/campaigns/new/1");
            setSteps(1);
          }}
          className="py-2 w-fit px-12  m-4 bg-blue-600 rounded-lg text-white"
        >
          Back
        </button>
        <button
          onClick={() => {
            setData({ ...data, platform: platformArr[selectedOption] });
            navigate("/campaigns/new/2");
            setSteps(2);
          }}
          className="py-2 w-fit px-12  m-4 bg-blue-600 rounded-lg text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default CampaignsNewS1Page;
