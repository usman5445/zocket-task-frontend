import React from "react";
import GoogleIcon from "../Icons/google.svg";
import EditIcon from "../Icons/edit-2.svg";
import DeleteIcon from "../Icons/trash.svg";
function TableRow({ trId }) {
  return (
    <tr className="border-b ">
      <td className=" py-4">
        <input type="checkbox" name="" id="" />
      </td>
      <td className=" py-4">
        <label
          htmlFor={trId}
          className="inline-flex relative items-center cursor-pointer"
        >
          <input type="checkbox" value="" id={trId} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </td>
      <td className="flex space-x-2  py-4">
        <img
          src=""
          className="bg-slate-500 overflow-hidden rounded-lg w-12 h-12"
          alt=""
        />
        <div className="text-left">
          <p>Camp Title</p>
          <span className="text-gray-400">created date</span>
        </div>
      </td>
      <td className=" py-4">25 jul 2020 - 01 Aug 2020</td>
      <td className=" py-4">300</td>
      <td className=" py-4">INR.3,400</td>
      <td className=" py-4">Chennai</td>
      <td className=" py-4">
        <img className="h-4 w-full" src={GoogleIcon} alt="" />
      </td>
      <td className=" py-4">
        <span className="bg-yellow-200 text-yellow-600 px-2 py-1 rounded-xl">
          Paused
        </span>
      </td>
      <td className="space-x-2 py-4">
        <button>
          <img src={EditIcon} alt="" />
        </button>
        <button>
          <img src={DeleteIcon} alt="" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
