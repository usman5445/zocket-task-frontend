import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import TableRow from "../Components/TableRow";
import AddIcon from "../Icons/add-circle.svg";
import SearchIcon from "../Icons/search-normal.svg";
import { getAllCampaigns } from "../Utils/api";
export default function CampaignsHomePage() {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleFilter(e) {
    if (e.target.value === "All Platform") {
      getAllCampaigns()
        .then((resp) => setCampaigns(resp.data))
        .catch((err) => console.log(err));
      return;
    }
    getAllCampaigns()
      .then((resp) =>
        setCampaigns(
          resp.data.filter((item) => item.platform === e.target.value)
        )
      )
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAllCampaigns()
      .then((campaigns) => setCampaigns(campaigns.data))
      .catch((error) => console.log(error));
  }, [isLoading]);
  return isLoading ? (
    <Loader isLoading={isLoading} />
  ) : (
    <div className=" h-full relative">
      <div className="flex justify-between items-center">
        <div className="items-start flex flex-col">
          <h2 className="text-3xl font-bold">Your Campaigns</h2>
          <span className="text-gray-400">
            Check the list of campigns you created
          </span>
        </div>
        <button
          onClick={() => navigate("new/1")}
          className="flex items-center justify-center space-x-2 bg-blue-500 rounded-lg  h-fit px-5 py-3   text-white hover:shadow-lg"
        >
          <img src={AddIcon} alt="" /> <span>Create new campaign</span>
        </button>
      </div>
      <div className="w-full  overflow-y-scroll h-[92%]  p-6 bg-white my-4 rounded-lg border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 border p-2 rounded-lg">
            <img src={SearchIcon} alt="" />
            <input
              className="focus:outline-none "
              type="text"
              placeholder="Search for the campaign"
            />
          </div>
          <div className=" space-x-4">
            <label className="text-gray-400" htmlFor="platform">
              Platform:
            </label>
            <select
              className="p-2 rounded-lg border bg-white"
              name="platform"
              id="platform"
              defaultValue={"All Platform"}
              onChange={(e) => handleFilter(e)}
            >
              <option value="All Platform">All Platform</option>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Youtube">Youtube</option>
            </select>
            <label className="text-gray-400" htmlFor="status">
              Status:
            </label>
            <select
              className="p-2 rounded-lg border bg-white"
              name="platform"
              id="platform"
            >
              <option value="All Status">All Status</option>
            </select>
            <select
              className="p-2 rounded-lg border bg-white"
              name="platform"
              id="platform"
            >
              <option value="Last 30 days">Last 30 days</option>
            </select>
          </div>
        </div>
        <table className="w-full my-4 table-auto">
          <thead className="  text-gray-400    ">
            <tr className="bg-gray-100 ">
              <th className="rounded-l-lg py-3 font-normal">
                <input type="checkbox" name="selectAll" id="selectAll" />
              </th>
              <th className="py-3 font-normal">On/Off</th>
              <th className="py-3 font-normal">Campaign</th>
              <th className="py-3 font-normal">Date Range</th>
              <th className="py-3 font-normal">Clicks</th>
              <th className="py-3 font-normal">Budget</th>
              <th className="py-3 font-normal">Location</th>
              <th className="py-3 font-normal">Platform</th>
              <th className="py-3 font-normal">Status</th>
              <th className="rounded-r-lg py-3 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody className=" ">
            {campaigns.map((campaign) => {
              return (
                <TableRow
                  trId={campaign._id}
                  data={campaign}
                  setIsLoading={setIsLoading}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
