import React, { useState } from "react";
import phone from "../../phone.jpg";
import ProductList from "../Product/ProductList";
import { useSelector, useDispatch } from "react-redux";
import AddButton from "../AddProduct/AddButton";
import Cart from "../Cart/Cart";
import { showCart } from "../../app/reducers/reducer";

function Home() {
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div data-testid="home-component">
      <div className="mt-10 flex md:flex-row flex-col gap-10">
        <input
          data-testid="filter-input"
          className="bg-white py-2 px-6 w-80 rounded shadow-md"
          placeholder="Apple Watch, Samsung S21, Macbook Pro,..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          data-testid="category-input"
          className="bg-white py-2 pl-2 w-44 rounded shadow-md text-gray-500"
          placeholder="Filter by Price or Rating"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <ProductList
        filter={filter}
        category={category}
        data={state.products}
        isLoading={false}
      />
      <AddButton />
    </div>
  );
}

export default Home;
