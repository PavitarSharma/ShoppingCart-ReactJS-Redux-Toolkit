import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error, Footer, Loader, Products, SearchBar } from "../components";
import Filters from "../components/Filters";
import { fetchProducts, STATUSES } from "../redux/features/productSlice";
import { FaFilter } from "react-icons/fa";
import SidebarFilterPanel from "../components/SidebarFilterPanel";
import { setCategoryFilter } from "../redux/features/filterSlice";
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
  const { price, rating, discount } = useSelector((state) => state.filters);

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const openFilterPanel = () => setOpenFilter(!openFilter);

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [dispatch, category]);

  useEffect(() => {
    document.title = "Shoping Website";
  }, []);

  if (status === STATUSES.LOADING) {
    return <Loader />;
  }

  if (status === STATUSES.ERROR) {
    return <Error />;
  }

  const searchProducts = products?.filter((product) => {
    if (!searchTerm.length) return product;
    if (!product.title) return;
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterCategory = (category) => {
    const filterCategory = products?.filter(
      (product) => product.category === category
    );
    dispatch(setCategoryFilter(filterCategory));
  };

  return (
    <>
      <div>
        <div className="flex gap-4 justify-between px-4">
          <div className="hidden md:block">
            <Filters
              categories={categories}
              setCategory={setCategory}
              handleFilterCategory={handleFilterCategory}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center">
              <SearchBar handleSearch={handleSearch} />
              <div
                onClick={openFilterPanel}
                className={`bg-black text-white py-[10px] px-3 md:hidden block rounded cursor-pointer ml-2 mt-3 duration-1000 transition-all`}
              >
                <FaFilter onClick={openFilterPanel} />
              </div>

              {openFilter && <SidebarFilterPanel categories={categories} />}
            </div>
            <div className="flex flex-wrap gap-4 p-2 items-center justify-center mr-auto ml-auto w-full mt-4">
              {searchProducts &&
                searchProducts
                  ?.filter((product) => product.price <= price)
                  ?.filter((product) => product.rating <= rating)
                  ?.filter((product) => product.discountPercentage <= discount)
                  ?.map((product) => (
                    <Products key={product.id} product={product} />
                  ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
