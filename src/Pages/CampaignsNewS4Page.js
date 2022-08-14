import React from "react";
import { useNavigate } from "react-router-dom";

function CampaignsNewS4Page({ setSteps }) {
  const navigate = useNavigate();
  return (
    <div>
      CampaignsNewS4Page
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
            navigate("/campaigns/new/4");
            setSteps(4);
          }}
          className="py-2 w-fit px-12  m-4 bg-blue-600 rounded-lg text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default CampaignsNewS4Page;
