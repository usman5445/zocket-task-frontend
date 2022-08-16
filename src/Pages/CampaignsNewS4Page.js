import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampaignProductCard from "../Components/CampaignProductCard";
import { newCampaign } from "../Utils/api";

function CampaignsNewS4Page({ setSteps, data, setData }) {
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
          mainImg="https://images.unsplash.com/photo-1615837136007-701de6015cfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          profileImg="https://images.unsplash.com/photo-1607081692251-d689f1b9af84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          onClick={() => setSelectedOption(1)}
          title={"Mukund Cake Shop"}
          disc="We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        />
        <CampaignProductCard
          isActive={selectedOption == 2}
          mainImg="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          profileImg="https://images.unsplash.com/photo-1607081692251-d689f1b9af84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          onClick={() => setSelectedOption(2)}
          title={"Mukund Cake Shop"}
          disc="We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        />
        <CampaignProductCard
          isActive={selectedOption == 3}
          mainImg="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          profileImg="https://images.unsplash.com/photo-1607081692251-d689f1b9af84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          onClick={() => setSelectedOption(3)}
          title={"Mukund Cake Shop"}
          disc="We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        />
        <CampaignProductCard
          mainImg="https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          isActive={selectedOption == 4}
          profileImg="https://images.unsplash.com/photo-1607081692251-d689f1b9af84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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
            newCampaign(data)
              .then((resp) => {
                console.log(resp.data);
                navigate("/campaigns");
                setSteps(4);
              })
              .catch((err) => console.log(err));
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
