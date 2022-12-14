import React from "react";
import { useNavigate } from "react-router-dom";

function AddButton() {
  const navigate = useNavigate();
  return (
    <div
      className="w-10 h-10 fixed bottom-10 right-10 cursor-pointer rounded-full group"
      data-testid="create-button"
      data-tooltip-target="tooltip-default"
      onClick={() => {
        navigate("/Create/0");
      }}
    >
      <span className="absolute hidden group-hover:flex -left-3 w-20 -top-2 -translate-y-full px-2 py-1 bg-gray-800 font-semibold rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
        Add to Cart
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="60"
        height="60"
        viewBox="0 0 30 30"
        style={{ fill: "#000000" }}
      >
        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
      </svg>
    </div>
  );
}

export default AddButton;
