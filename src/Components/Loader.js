import React from "react";

function Loader({ isLoading }) {
  return isLoading ? (
    <div className="absolute top-0 flex items-center  justify-center w-full h-full text-9xl ">
      loading...
    </div>
  ) : null;
}

export default Loader;
