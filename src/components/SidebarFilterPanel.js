import Slider from "@mui/material/Slider";

import { useDispatch, useSelector } from "react-redux";
import { setPriceFilter, setRatingFilter, setDiscountFilter } from "../redux/features/filterSlice";

const SidebarFilterPanel = ({ categories }) => {
    const dispatch = useDispatch();
  const price = useSelector((state) => state.filters.price);
  const rating = useSelector((state) => state.filters.rating);
  const discount = useSelector((state) => state.filters.discount);
  return (
    <div className=" w-[200px] shadow-lg h-[500px] fixed left-1 top-[58px] flex flex-col px-2 py-10 backdrop-blur-sm bg-white/30">
      <div className="w-[150px] ml-auto mr-auto flex flex-col gap-2">
        <p className="font-bold">Price</p>
        <Slider
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={1500}
          value={price}
          onChange={(event, value) => dispatch(setPriceFilter(value))}
        />
      </div>

      <div className="px-2 mt-4">
        <p className="font-bold">Catogries</p>
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

      <div className="w-[150px] ml-auto mr-auto flex flex-col gap-2 mt-2">
        <p className="font-bold">Discount</p>
        <Slider
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={20}
          value={discount}
          onChange={(event, value) => dispatch(setDiscountFilter(value))}
        />
      </div>

      <div className="w-[150px] ml-auto mr-auto flex flex-col gap-2 mt-2">
        <p className="font-bold">Rating</p>
        <Slider
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={5}
          value={rating}
          onChange={(event, value) => dispatch(setRatingFilter(value))}
        />
      </div>
    </div>
  );
};

export default SidebarFilterPanel;
