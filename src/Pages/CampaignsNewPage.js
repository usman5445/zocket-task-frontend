import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Stepper from "../Components/Stepper";
import CampaignsNewS1Page from "./CampaignsNewS1Page";
import CampaignsNewS2Page from "./CampaignsNewS2Page";
import CampaignsNewS3Page from "./CampaignsNewS3Page";
import CampaignsNewS4Page from "./CampaignsNewS4Page";
export const CampaignsNewPage = () => {
  const [steps, setSteps] = useState(1);

  return (
    <div className="h-[70%] relative">
      <div className="flex justify-between items-center">
        <div className="items-start flex flex-col">
          <h2 className="text-3xl font-bold">Your Ad Campaign</h2>
          <span className="text-gray-400">
            Launch your ad in just 4 easy steps
          </span>
        </div>
      </div>
      <Stepper steps={steps} />
      <Routes>
        <Route
          index
          path="1"
          element={<CampaignsNewS1Page setSteps={setSteps} />}
        />
        <Route path="2" element={<CampaignsNewS2Page setSteps={setSteps} />} />
        <Route path="3" element={<CampaignsNewS3Page setSteps={setSteps} />} />
        <Route path="4" element={<CampaignsNewS4Page setSteps={setSteps} />} />
      </Routes>
    </div>
  );
};
