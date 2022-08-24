import React from "react";
import { useNavigate } from "react-router-dom";
import { showCart } from "../../app/reducers/reducer";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();
  return (
    <div
      className="py-4 px-6 mt-5 rounded bg-white  m-auto flex justify-between shadow-md sticky top-0"
      style={{ overflow: state.showCart ? "hidden" : "auto" }}
    >
      <div
        className="italic font-semibold text-lg cursor-pointer"
        onClick={() => navigate("/")}
      >
        Shopping Store
      </div>
      <div
        className="italic font-bold text-lg cursor-pointer relative"
        onClick={() => dispatch(showCart())} //Toggle Out Cart Display
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <div className="inline-flex absolute -bottom-2 left-5 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-slate-500 rounded-full border-2 border-white dark:border-gray-900">
          {state.cart.length}
        </div>
      </div>
    </div>
  );
}

export default Header;
