import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { showCart, updateCart } from "../../app/reducers/reducer";

function Cart() {
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(localStorage["shopping-cart"]) !== null) {
      dispatch(updateCart(JSON.parse(localStorage["shopping-cart"]))); // Maintaing local storage
    }
  }, [localStorage["shopping-cart"]]);

  return (
    <>
      {state.showCart && (
        <div className="fixed top-0 left-0 h-screen w-full overflow-auto bg-black/30 z-20">
          <div className="absolute top-0 right-0 min-h-screen z-10 w-80 bg-white border-l-2 border-gray-400 shadow-xl p-5 flex flex-col gap-2">
            <div className="flex justify-between">
              <div>Cart</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer hover:scale-125"
                  onClick={() => dispatch(showCart())}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              {state.cart.map((item) => (
                <CartItem {...item} key={item.id} />
              ))}
            </div>
            <div className="flex justify-between font-bold text-2xl mt-10">
              <div>Total</div>
              <div>
                $
                {state.cart.reduce((total, cartItem) => {
                  const item = state.products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
