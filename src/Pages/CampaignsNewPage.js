import React, { useEffect, useRef, useState } from "react";
import Stepper from "../Components/Stepper";
export const CampaignsNewPage = () => {
  const [steps, setSteps] = useState(1);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="items-start flex flex-col">
          <h2 className="text-3xl font-bold">Your Ad Campaign</h2>
          <span className="text-gray-400">
            Launch your ad in just 4 easy steps
          </span>
        </div>
      </div>
      <Stepper steps={steps} />
    </div>
  );
};
