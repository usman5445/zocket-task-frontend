import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToggleBtnGrp from "../Components/ToggleBtnGrp";
import LocationIcon from "../Icons/location.svg";
function CampaignsNewS3Page({ setSteps }) {
  const navigate = useNavigate();
  const [selectedBtn, setSelectedBtn] = useState();
  const [selectedLoc, setSelectedLoc] = useState();

  return (
    <div className="bg-white text-start p-4 border h-full rounded-lg flex flex-col relative">
      <div>
        <span className="font-bold">Choose the Product</span>
      </div>
      <hr className="my-4" />
      <div className="overflow-y-scroll ">
        <div>
          <p className="underline font-bold">Budget and dates info</p>
        </div>
        <div className="m-4 space-y-4 relative">
          <div>
            <p>Budget Timeline</p>
            <ToggleBtnGrp
              setBtn={setSelectedBtn}
              items={["Lifetime", "Daily", "Another"]}
            />
          </div>
          <div className="w-full justify-around flex space-x-4  ">
            <label className="flex   flex-col w-full" htmlFor="startDate">
              Start Date
              <input
                className="border mt-2 rounded-lg px-4 py-2 w-full"
                type="date"
                name="startDate"
                id=""
              />
            </label>

            <label className="flex   flex-col w-full" htmlFor="endDate">
              End Date
              <input
                className="border mt-2 rounded-lg px-4 py-2 w-full"
                type="date"
                name="endDate"
                id=""
              />
            </label>
          </div>
          <div className="w-full space-y-2">
            <div className="w-full flex justify-between">
              <p>Enter campaign budget</p>
              <select
                className="bg-transparent focus:outline-none"
                name=""
                id=""
              >
                <option value="INR">🇮🇳 INR</option>
              </select>
            </div>
            <input className="w-full" type="range" name="" id="" />
            <div className="w-full flex justify-between">
              <p>100</p>
              <p>100000</p>
            </div>
          </div>
        </div>
        {/* budget */}

        <div>
          <p className="underline font-bold">Location info</p>
        </div>
        <div className="m-4 space-y-4 relative">
          <div>
            <p>Location type</p>
            <ToggleBtnGrp
              setBtn={setSelectedLoc}
              items={["Location", "Radius"]}
            />
          </div>
          {selectedLoc == "Location" ? (
            <div>
              <p>Select Location</p>
              <div className="px-4 py-2 flex border rounded-lg">
                <input
                  className="w-full focus:outline-none"
                  placeholder="Select a place name, address or coordinates"
                  type="text"
                />
                <img src={LocationIcon} alt="" />
              </div>
            </div>
          ) : (
            <div className="w-full space-y-2">
              <p>Enter campaign budget</p>

              <input className="w-full" type="range" name="" id="" />
              <div className="w-full flex justify-between">
                <p>1</p>
                <p>30</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="self-end ">
        <button
          onClick={() => {
            navigate("/campaigns/new/2");
            setSteps(2);
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

export default CampaignsNewS3Page;
