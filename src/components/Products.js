import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="shadow-lg cursor-pointer max-w-[250px] w-full">
        <div className="w-full h-[180px]">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover rounded-t-xl"
            />
          </Link>
        </div>

        <div className="px-2 py-4">
          <p className="text-xl font-semibold">{product.title}</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-orange-600 font-medium">${product.price}</p>
            <button
              onMouseEnter={() =>
                product.stock < 50 && toast("hurry! only a few items left")
              }
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-blue-600 text-white text-xs px-3 py-2 rounded cursor-pointer"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Products;
