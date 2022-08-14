import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampaignProductOption from "../Components/CampaignProductOption";

function CampaignsNewS2Page({ setSteps }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <div className="bg-white text-start p-4 border rounded-lg flex flex-col relative">
      <div>
        <span className="font-bold">Choose the Product</span>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-3  gap-3">
        <CampaignProductOption
          img={"#"}
          isActive={selectedOption == 1}
          onClick={() => setSelectedOption(1)}
          title="Bluberry cake with raw toppings"
          rate={2290}
        />
        <CampaignProductOption
          img={"#"}
          isActive={selectedOption == 2}
          onClick={() => setSelectedOption(2)}
          title="Chocolate truffle cake"
          rate={2190}
        />
        <CampaignProductOption
          img={"#"}
          isActive={selectedOption == 3}
          onClick={() => setSelectedOption(3)}
          title="Browine cake with fluffy cream"
          rate={1122}
        />
        <CampaignProductOption
          img={"#"}
          isActive={selectedOption == 4}
          onClick={() => setSelectedOption(4)}
          title="Ferro rocher cake"
          rate={1234}
        />
        <CampaignProductOption
          img={"#"}
          isActive={selectedOption == 5}
          onClick={() => setSelectedOption(5)}
          title="Custurd mixed with fruit cake"
          rate={2456}
        />
        <CampaignProductOption
          img={"#"}
          isActive={selectedOption == 6}
          onClick={() => setSelectedOption(6)}
          title="Best raw topping choco cake"
          rate={2345}
        />
        <CampaignProductOption
          img={"#"}
          isActive={selectedOption == 7}
          onClick={() => setSelectedOption(7)}
          title="Green cup cakes"
          rate={1234}
        />
        <CampaignProductOption
          img={"#"}
          isActive={selectedOption == 8}
          onClick={() => setSelectedOption(8)}
          title="Blueberry topping cakes"
          rate={2456}
        />
        <CampaignProductOption
          img={"#"}
          isActive={selectedOption == 9}
          onClick={() => setSelectedOption(9)}
          title="Blueberry topping cakes"
          rate={2345}
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
            navigate("/campaigns/new/3");
            setSteps(3);
          }}
          className="py-2 w-fit px-12  m-4 bg-blue-600 rounded-lg text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default CampaignsNewS2Page;
