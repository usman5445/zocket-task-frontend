import React, { useState } from "react";
import GoogleIcon from "../Icons/google.svg";
import FacebookIcon from "../Icons/facebook.svg";
import YoutubeIcon from "../Icons/youtube.svg";
import InstagramIcon from "../Icons/instagram.svg";
import DeleteIcon from "../Icons/trash.svg";
import { deleteCampaign, updateCampaign } from "../Utils/api";
import Loader from "../Components/Loader";
function TableRow({ trId, data, setIsLoading }) {
  let platformIcon = "#";
  switch (data?.platform) {
    case "Google":
      platformIcon = GoogleIcon;
      break;
    case "Facebook":
      platformIcon = FacebookIcon;
      break;
    case "Youtube":
      platformIcon = YoutubeIcon;
      break;
    case "Instagram":
      platformIcon = InstagramIcon;
      break;
    default:
      platformIcon = GoogleIcon;
      break;
  }

  function handleDelete(id) {
    setIsLoading(true);
    deleteCampaign(id)
      .then((resp) => {
        console.log(resp.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  function handleUpdate(data) {
    setIsLoading(true);
    updateCampaign({ ...data, isOn: !data.isOn })
      .then((resp) => {
        console.log(resp.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }
  return (
    <tr key={data?._id} className="border-b ">
      <td className=" py-4">
        <input type="checkbox" name="" id="" />
      </td>
      <td className=" py-4">
        <label
          htmlFor={trId}
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            onChange={() => handleUpdate(data)}
            checked={data?.isOn}
            type="checkbox"
            value=""
            id={trId}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </td>
      <td className="flex space-x-2  py-4">
        <img
          src={data?.campaignImg}
          className="bg-slate-500 overflow-hidden object-cover rounded-lg w-12 h-12"
          alt=""
        />
        <div className="text-left">
          <p>{data?.campaignName}</p>
          <span className="text-gray-400">
            created on {new Date(data?.createdAt).getDate()}/
            {new Date(data?.createdAt).getMonth() + 1}/
            {new Date(data?.createdAt).getFullYear()}
          </span>
        </div>
      </td>
      <td className=" py-4">{data?.dateRange}</td>
      <td className=" py-4">{data?.clicks}</td>
      <td className=" py-4">INR.{data?.budget}</td>
      <td className=" py-4">{data?.location}</td>
      <td className=" py-4">
        <img className="h-4 w-full" src={platformIcon} alt="" />
      </td>
      <td className=" py-4">
        <span className="bg-green-200 text-green-600 px-2 py-1 rounded-xl">
          {data?.status}
        </span>
      </td>
      <td className="space-x-2 py-4">
        <button onClick={() => handleDelete(data?._id)}>
          <img src={DeleteIcon} alt="" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
