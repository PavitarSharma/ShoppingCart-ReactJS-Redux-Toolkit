import React, { useRef } from "react";
import Slider from "@mui/material/Slider";

import { useDispatch } from "react-redux";
const Filters = ({categories}) => {
  const dispatch = useDispatch();

  return (
    <div className=" w-[200px] shadow-lg h-[600px] flex flex-col px-2 py-10">
      <div className="w-[150px] ml-auto mr-auto flex flex-col gap-2">
        <p className="font-bold">Price</p>
        <Slider
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={1500}
        />
      </div>

      <div className="px-2 mt-6">
        <p className="font-bold mb-2">Catogries</p>
        {categories.map((category, index) => (
          <p
            className="cursor-pointer text-sm my-2 hover:text-orange-500"
            key={index}
            // onClick={() => handleSelectCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>

      <div className="w-[150px] ml-auto mr-auto flex flex-col gap-2 my-8">
        <p className="font-bold">Discount</p>
        <Slider
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={30}
        />
      </div>

      <div className="w-[150px] ml-auto mr-auto flex flex-col gap-2 mt-8">
        <p className="font-bold">Rating</p>
        <Slider

          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={5}
        />
      </div>
    </div>
  );
};

export default Filters;
