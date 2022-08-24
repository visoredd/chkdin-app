import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  updateProductList,
  deleteProduct,
  removeFromCart,
} from "../../app/reducers/reducer";

function Product(props) {
  const navigate = useNavigate();
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();

  const quantity =
    state.cart.find((item) => item.id === props.id)?.quantity || 0; //Getting quantity per item

  return (
    <React.Fragment key={props.id}>
      <div className="max-w-max mb-10" data-testid={props.id}>
        <div className="px-2 pb-2 pt-2 bg-white rounded-lg flex flex-col justify-between items-center">
          <div className="self-end flex gap-2 mx-2 my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hover:scale-150 cursor-pointer text-slate-800"
              onClick={() => navigate(`/create/${props.id}`)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hover:scale-150 cursor-pointer text-slate-800"
              onClick={() => dispatch(deleteProduct(props.id))}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
          <img
            src={props.thumbnail}
            alt="Not Found.."
            className="w-36 h-36 rounded-2xl"
          />

          <p className="font-semibold truncate w-40 mt-2">{props.title}</p>
          <p className="font-semibold truncate w-40 text-slate-400">
            {props.category}
          </p>
          <p className="flex gap-1 font-bold truncate w-40">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {props.rating}
          </p>
          <p className="text-center font-bold mt-2">${props.price}</p>
          <div className="self-stretch">
            {quantity === 0 ? (
              <button
                onClick={() => dispatch(increaseCartQuantity(props.id))} // Increase Quantity
                className="w-full my-2 p-2 basis-full rounded-xl bg-blue-500 text-white font-semibold flex-grow self-stretch hover:bg-blue-800 hover:shadow-xl"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center flex-col gap-2">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 hover:scale-125 cursor-pointer"
                    onClick={() => dispatch(decreaseCartQuantity(props.id))} // Decrease Quantity
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <span>{quantity}</span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 hover:scale-125 cursor-pointer"
                    onClick={() => dispatch(increaseCartQuantity(props.id))} // Increase Quantity
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(props.id))} // Remove Item from Cart
                  className="bg-red-500 text-sm p-2 rounded-sm"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Product;
