import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import MenuBar from "./MenuBar";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [open, setOpen] = useState(false);

  const openMenuBar = () => setOpen(!open);
  const closeMenuBar = () => setOpen(false);

  const active =
    "text-md font-medium cursor-pointer border-b-2 border-blue-500";
  const inActive = "text-md font-medium cursor-pointer";
  return (
    <>
      <div className="flex items-center justify-between bg-white z-50 px-12 py-4 sticky top-0 shadow-md mb-6">
        <Link to="/" className="font-bold text-xl cursor-pointer">
          Shop
        </Link>

        <div className="block md:hidden">
          {!open ? (
            <AiOutlineMenu size={24} onClick={openMenuBar} />
          ) : (
            <AiOutlineClose size={24} onClick={closeMenuBar} />
          )}
        </div>

        <ul className="md:flex items-center gap-4 hidden">
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
      {open && <MenuBar /> }
    </>
  );
};

export default Navbar;
