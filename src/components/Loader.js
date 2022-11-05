import React from "react";
import loading from "../assests/loading.gif";
const Loader = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img src={loading} alt="loader" className="w-32 h-32 object-contain bg-transparent" />
      <h1 className="font-bold text-2xl text-white mt-2">
        {title || "Loading"}
      </h1>
    </div>
  );
};

export default Loader;
