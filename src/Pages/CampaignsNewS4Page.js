import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampaignProductCard from "../Components/CampaignProductCard";

function CampaignsNewS4Page({ setSteps }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <div className="bg-white text-start p-4 border h-full justify-between rounded-lg flex flex-col relative">
      <div>
        <span className="font-bold">Choose the Product</span>
      </div>
      <hr className="my-4" />
      <div className=" grid grid-cols-4 gap-4 overflow-y-scroll ">
        <CampaignProductCard
          isActive={selectedOption == 1}
          onClick={() => setSelectedOption(1)}
          title={"Mukund Cake Shop"}
          disc="We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        />
        <CampaignProductCard
          isActive={selectedOption == 2}
          onClick={() => setSelectedOption(2)}
          title={"Mukund Cake Shop"}
          disc="We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        />
        <CampaignProductCard
          isActive={selectedOption == 3}
          onClick={() => setSelectedOption(3)}
          title={"Mukund Cake Shop"}
          disc="We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        />
        <CampaignProductCard
          isActive={selectedOption == 4}
          onClick={() => setSelectedOption(4)}
          title={"Mukund Cake Shop"}
          disc="We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        />
      </div>
      <div className="self-end">
        <button
          onClick={() => {
            navigate("/campaigns/new/3");
            setSteps(3);
          }}
          className="py-2 w-fit px-12  m-4 bg-blue-600 rounded-lg text-white"
        >
          Back
        </button>
        <button
          onClick={() => {
            navigate("/campaigns");
            setSteps(4);
          }}
          className="py-2 w-fit px-12  m-4 bg-blue-600 rounded-lg text-white"
        >
          Start Campaign
        </button>
      </div>
    </div>
  );
}

export default CampaignsNewS4Page;
