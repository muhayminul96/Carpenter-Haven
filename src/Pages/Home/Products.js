import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const Products = () => {
  const navigate = useNavigate();
  const { isLoading, data: products } = useQuery("products", () =>
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
        {products
          ?.slice(0, 3)
          .reverse()
          .map((product) => (
            <div class="card w-90 bg-base-100 shadow-xl my-8">
              <figure>
                <img src={product.img} alt={product.name} />
              </figure>
              <div class="card-body ">
                <h2 class="card-title text-2xl mx-auto">{product.name}</h2>
                <p className="my-3">{product.description.slice(0, 90)}...</p>
                <p className="flex font-bold justify-start">
                  Minimum Order :{" "}
                  <span className="text-xl text-primary font-extrabold mx-2">
                    {product.minimumOrderQuantity}
                  </span>{" "}
                  pisces
                </p>
                <p className="flex font-bold justify-start">
                  Available :{" "}
                  <span className="text-xl text-primary font-extrabold mx-2">
                    {product.quantity}
                  </span>{" "}
                  pisces
                </p>
                <p className="flex font-bold justify-start">
                  Price :{" "}
                  <span className="text-xl text-primary font-extrabold mx-2">
                    {product.price} 
                  </span>
                  Taka
                </p>
                <div class="card-actions">
                  <button
                    onClick={() => navigate(`/product/${product._id}`)}
                    class="btn btn-primary mt-6 mx-auto"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
