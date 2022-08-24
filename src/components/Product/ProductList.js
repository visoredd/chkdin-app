import React, { useState, useEffect } from "react";

import Product from "./Product";

function ProductList({ filter, category, isLoading, data }) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    console.log(category);
    setProductList(
      data
        .filter(
          (product) =>
            product.title.toLowerCase().includes(filter.toLowerCase()) ||
            product.category.toLowerCase().includes(filter.toLowerCase()) // Logic for filter out product based on title or category
        )
        .sort((a, b) => {
          if (category == "") {
            return 1;
          }
          if (category == "price") {
            return a.price - b.price; // Sort List based on price
          }
          if (category == "rating") {
            return b.rating - a.rating; // Sort List based on Rating
          }
        })
    );
  }, [data, filter, category]);

  if (isLoading) {
    return <div data-testid="loading">Loading...</div>;
  }
  return (
    <div className="flex flex-wrap gap-14 mx-5 mt-20 items-center">
      {productList.map((product) => (
        <Product
          title={product.title}
          thumbnail={product.thumbnail}
          id={product.id}
          price={product.price}
          category={product.category}
          rating={product.rating}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default ProductList;
