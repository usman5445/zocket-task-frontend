import React, { useEffect, useState } from "react";

function ToggleBtnGrp({ items, setBtn }) {
  const [selectedBtn, setSelectedBtn] = useState(
    new Array(items.length).fill(false).map((el, i) => (i == 0 ? true : false))
  );
  useEffect(() => {
    setBtn(items[0]);
  }, []);
  return (
    <div className="inline-flex bg-gray-200 rounded-full  my-2" role="group">
      {items.map((el, index) => {
        return (
          <button
            onClick={() => {
              setSelectedBtn([
                ...selectedBtn.map((el, i) => (index == i ? true : false)),
              ]);
              setBtn(el);
            }}
            className={`px-4 flex-1 rounded-full transition py-2 ${
              selectedBtn[index]
                ? "bg-blue-500 text-white"
                : "bg-none text-gray-400"
            }`}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
}

export default ToggleBtnGrp;
