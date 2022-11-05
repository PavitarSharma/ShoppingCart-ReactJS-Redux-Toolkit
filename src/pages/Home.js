import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products, SearchBar } from "../components";
import Filters from "../components/Filters";
import { fetchProducts, STATUSES } from "../redux/features/productSlice";
import { FaFilter } from "react-icons/fa";
import SidebarFilterPanel from "../components/SidebarFilterPanel";
const categories = [
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
  "Home-Decoration",
];
const Home = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.product.products);
  const [price, setPrice] = useState([0, 1500]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const [openFilter, setOpenFilter] = useState(false);
  const openFilterPanel = () => setOpenFilter(!openFilter);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    dispatch(fetchProducts((price, category, ratings)))
  }, [dispatch, price, category, ratings]);

  useEffect(() => {
    document.title = "Shoping Website";
  }, []);

  return (
    <div>
      <div className="flex gap-4 justify-between px-4">
        <div className="hidden md:block">
          <Filters categories={categories} />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center">
            <SearchBar />
            <div
              onClick={openFilterPanel}
              className={`bg-black text-white py-[10px] px-3 md:hidden block rounded cursor-pointer ml-2 mt-3 duration-1000 transition-all`}
            >
              <FaFilter onClick={openFilterPanel} />
            </div>

            {openFilter && <SidebarFilterPanel categories={categories} price={price} handlePriceChange={priceHandler} />}
          </div>
          <div className="flex flex-wrap gap-4 p-2 items-center justify-center mr-auto ml-auto w-full border-2 mt-4">
            {products &&
              products?.map((product) => (
                <Products key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
