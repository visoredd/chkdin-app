import React, { useState, useEffect, useId } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useParams } from "react-router-dom";
import { updateProductList } from "../../app/reducers/reducer";

function Create() {
  const navigate = useNavigate();
  let { id } = useParams();
  const state = useSelector((reducer) => reducer.reducerSlice);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: new Date().valueOf(), // new Date() for unique id on every create
    title: "",
    description: "",
    thumbnail: "",
    category: "",
    rating: 5,
    price: 0,
  });

  useEffect(() => {
    if (id != 0) {
      let prod = state.products.find((item) => item.id == id);
      setProduct(prod); // if edit we populate edit data
    }
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductList(product));
    navigate("/");
  };
  const handleChange = (name, value) => {
    setProduct({ ...product, [name]: value });
  };
  if (!product) {
    return <>Loading...</>;
  }

  return (
    <div className="flex justify-center align-center">
      <div className="text-center mt-10 w-4/5 md:w-2/5">
        <div className="text-2xl font-semibold mb-4">Create Product</div>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
          data-testid="create-form"
        >
          <input
            className="p-2 rounded-md shadow-lg"
            placeholder="Name"
            name="title"
            data-testid="name-test"
            value={product.title}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
          <textarea
            className="p-2 rounded-md shadow-lg"
            placeholder="Description"
            name="description"
            data-testid="desc-test"
            value={product.description}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            rows={3}
          />
          <input
            className="p-2 rounded-md shadow-lg"
            placeholder="Image URL"
            data-testid="avatar-test"
            name="thumbnail"
            value={product.thumbnail}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <select
            className="py-2 pl-2 rounded-md shadow-lg"
            placeholder="Categories"
            name="category"
            value={product.category}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          >
            <option value="">Categories</option>
            {state.category.map((category) => (
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            className="p-2 rounded-md shadow-lg"
            placeholder="Rating"
            type="number"
            name="rating"
            max={5}
            value={product.rating}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
          <input
            className="p-2 rounded-md shadow-lg"
            placeholder="Price"
            type="number"
            name="price"
            value={product.price}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:shodow-xl hover:bg-blue-800 p-2 rounded-md shadow-lg text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
