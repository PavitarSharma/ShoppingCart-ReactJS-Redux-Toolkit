import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  const cart = useSelector((state) => state.cart.cart);

  const active =
    "text-lg font-medium cursor-pointer border-l-4 pl-2 border-blue-500";
  const inActive = "text-lg font-medium cursor-pointer";
  return (
    <div className="shadow-xl backdrop-blur-sm bg-white/30 fixed top-[60px] left-0 right-0 h-[200px] w-full z-10">
      <ul className="md:hidden flex items-center  gap-4 justify-center flex-col mt-14 text-black">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Products
        </NavLink>
        <div className="flex items-start relative gap-[2px]">
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? active : inActive)}
          >
            Cart
          </NavLink>
          <span className="text-sm mt-[-4px]">{cart.length}</span>
        </div>
      </ul>
    </div>
  );
};

export default MenuBar;
