import React, { useEffect } from "react";
import LampIcon from "../Icons/lamp-charge.svg";
import BagIcon from "../Icons/bag.svg";
import CalanderIcon from "../Icons/Vector.svg";
import CheckedIcon from "../Icons/Vector (1).svg";

export default function Stepper({ steps }) {
  function stepsChanger() {
    let elements = document.querySelectorAll("#bg");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("bg-gray-300");
    }
    for (let i = 0; i < steps * 2; i++) {
      elements[i - 1]?.classList.replace("bg-gray-300", "bg-orange-400");
    }
  }

  useEffect(() => {
    stepsChanger();
  }, [steps]);
  return (
    <div className="my-8">
      <ol className="c-stepper  ">
        <li className="c-stepper_item relative">
          <img
            id="bg"
            src={LampIcon}
            className="bg-gray-300 ring-4  ring-white w-16 h-16 p-4  rounded-full"
            alt=""
          />
          <p className="c-stepper_dic">What you want to do</p>
          <div
            id="bg"
            className="h-1 top-1/3 w-full  bg-gray-300 absolute -right-2/4 -z-10"
          ></div>
        </li>
        <li className="c-stepper_item relative">
          <img
            id="bg"
            src={BagIcon}
            className="bg-gray-300 ring-4  ring-white w-16 h-16 p-4  rounded-full"
            alt=""
          />
          <p className="c-stepper_dic">Choose product</p>
          <div
            id="bg"
            className="h-1 top-1/3 w-full  bg-gray-300 absolute -right-2/4 -z-10"
          ></div>
        </li>
        <li className="c-stepper_item relative">
          <img
            id="bg"
            src={CalanderIcon}
            className="bg-gray-300 ring-4  ring-white w-16 h-16 p-4  rounded-full"
            alt=""
          />
          <p className="c-stepper_dic">Campaign settings</p>
          <div
            id="bg"
            className="h-1 top-1/3 w-full  bg-gray-300 absolute -right-2/4 -z-10"
          ></div>
        </li>
        <li className="c-stepper_item">
          <img
            id="bg"
            src={CheckedIcon}
            className="bg-gray-300 ring-4  ring-white w-16 h-16 p-4  rounded-full"
            alt=""
          />
          <p className="c-stepper_dic">Ready to go</p>
        </li>
      </ol>
    </div>
  );
}
