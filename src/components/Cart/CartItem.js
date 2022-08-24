import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  updateProductList,
  deleteProduct,
  removeFromCart,
} from "../../app/reducers/reducer";

function CartItem({ id, quantity }) {
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();
  const item = state.products.find((i) => i.id === id);
  return (
    <div
      className="grid grid-cols-5 gap-5 items-center mt-5 border-2 py-4 px-2 border-slate-100 rounded-sm"
      key={id}
    >
      <div className="col-span-1 self-stretch">
        <img src={item.thumbnail} alt="Not Found.." className="h-full" />
      </div>
      <div className="col-span-1 text-xs text-gray-600 w-14 truncate">
        {item.title}phpohphphphphphphph
      </div>
      <div className="col-span-2">
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 hover:scale-125 cursor-pointer"
            onClick={() => dispatch(decreaseCartQuantity(id))}
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
            onClick={() => dispatch(increaseCartQuantity(id))}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="col-span-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer text-slate-800 hover:scale-125"
          onClick={() => dispatch(removeFromCart(id))}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
}

export default CartItem;
