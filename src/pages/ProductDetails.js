import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/features/productSlice";
import { addToCart } from "../redux/features/cartSlice";


const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  console.log(product);

 

  useEffect(() => {
    const action = getProduct(id?.toString());
    dispatch(action);
  }, [dispatch, id]);

  return (
    <>
    
      <div className="w-full h-screen flex flex-col items-center justify-center md:my-0 my-16">
        <p className="text-center max-w-[800px] w-[80%] mb-6 text-sm font-thin">
          Here you can check your product details if you interesting to buying
          our product plese click on add to cart button and go to cart page and
          buy you products
        </p>
        <div className="shadow py-2 px-2 rounded flex md:flex-row flex-col gap-4 justify-between items-center ml-auto mr-auto my-2 max-w-[800px] w-[90%]">
          <div className="flex flex-col gap-2 items-center w-full">
            <img
              className="md:w-full w-64 md:h-60 h-full object-cover"
              src={product.thumbnail}
              alt={product.brand}
            />
            <div className="flex gap-2 overflow-y-hidden overflow-x-scroll products w-full items-center justify-center">
              {product?.images?.map((image, index) => (
                <img
                  className="md:w-14 h-14 object-cover"
                  key={index}
                  src={image}
                  alt="product"
                />
              ))}
            </div>
          </div>

          <div className="md:hidden block w-full h-[1.3px] bg-gray-300 rounded"></div>

          <div className="flex flex-col mb-4">
            <div>
              <p className="text-2xl font-bold">{product.title}</p>
              <div className="flex md:flex-col flex-row md:items-start items-center md:gap-0 gap-2">
                <p className="text-md font-medium">${product.price}</p>
                <p className="text-xs text-white bg-red-500 w-11 pl-1">
                  {product.discountPercentage}%
                </p>
              </div>
            </div>
            <p className="font-mono my-2">{product.description}</p>
            <div className="text-sm">
              <p className={``}>Rating: {product.rating}</p>
              <p className="bg-green-500 text-white py-1 px-2 rounded w-24 mt-2">
                IN Stock: {product.stock}
              </p>
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-600 text-white py-1 rounded mt-8 sm:w-[160px] w-full"
            >
              ADD To Cart
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProductDetails;
