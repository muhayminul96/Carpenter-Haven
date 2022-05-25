import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(products);
  return (
    <div>
      <h1 className="text-4xl my-16 font-bold text-primary">
        Our All Products
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products?.slice(0,3).reverse().map((product) => (
          <div class="card w-90 bg-base-100 shadow-xl my-8">
            <figure>
              <img
                src={product.img}
                alt={product.name}
              />
            </figure>
            <div class="card-body ">
              <h2 class="card-title mx-auto">{product.name}</h2>
              <p>{product.description.slice(0,50)}...</p>
              <div class="card-actions">
                <button class="btn btn-primary mt-6 mx-auto">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
