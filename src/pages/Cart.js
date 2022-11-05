import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../redux/features/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    document.title = "Cart Page";
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-xl font-bold my-4">Shoping Cart</h1>
      <p className="text-center mb-4 font-medium">
        Total items {cart ? cart.length : 0}
      </p>
      {cart &&
        cart?.map((item) => (
          <div
            key={item.id}
            className="shadow-lg py-2 px-2 rounded flex md:flex-row md:gap-0 gap-4 flex-col justify-between items-center max-w-[600px] w-[90%] ml-auto mr-auto my-2"
          >
            <div className="flex md:flex-row flex-col gap-2 items-center">
              <img
                className="md:w-20 w-full md:h-20 h-28 object-cover"
                src={item.thumbnail}
                alt={item.title}
              />
              <div className="flex md:flex-col flex-row md:items-start items-center md:justify-start justify-between w-full">
                <h5 className="text-md font-semibold">{item.title}</h5>
                <p className="text-sm text-orange-600 font-medium">
                  ${item.price}
                </p>
              </div>
            </div>

            <div className="flex item-center">
              <AiOutlineMinus
                onClick={() => dispatch(decrementQuantity(item.id))}
                className="w-6 h-6 bg-red-500 text-white cursor-pointer"
              />
              <p className="px-4 font-bold">{item.quantity}</p>
              <AiOutlinePlus
                onClick={() => dispatch(incrementQuantity(item.id))}
                className="w-6 h-6 bg-green-500 text-white cursor-pointer"
              />
            </div>

            <div>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                type="button"
                className="bg-orange-400 px-4 py-1 text-sm rounded cursor-pointer text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      <div className="my-4 flex flex-col ">
        <div className="max-w-[500px] w-[70%] h-[2px] bg-black rounded mr-auto ml-auto"></div>
        <div className="flex items-center gap-4 justify-center my-4">
          <p>Total: </p>
          <p>
            $
            {cart
              ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
              : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
