import Slider from "@mui/material/Slider";

const SidebarFilterPanel = ({ categories, price, handlePriceChange }) => {
  return (
    <div className=" w-[200px] shadow-lg h-[500px] fixed left-1 top-[58px] flex flex-col px-2 py-10 backdrop-blur-sm bg-white/30">
      <div className="w-[150px] ml-auto mr-auto flex flex-col gap-2">
        <p className="font-bold">Price</p>
        <Slider
          onChange={handlePriceChange}
          value={price}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={1500}
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
          max={30}
        />
      </div>

      <div className="w-[150px] ml-auto mr-auto flex flex-col gap-2 mt-2">
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

export default SidebarFilterPanel;
