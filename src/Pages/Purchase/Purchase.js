import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Purchase = () => {
    const { id } = useParams(); 
    console.log(id)
  const { isLoading, data: product } = useQuery("product", () =>
    fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
  );
  if(isLoading){
      return <Loading></Loading>
  }
  return (
    <div>
      <h1 className="text-4xl my-16 font-bold text-primary">
        Please Fill This
      </h1>
      <form className="w-48 lg:w-80 mx-auto">
        <div className="form-control  mx-auto">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              readOnly
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control  mx-auto">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <input
              type="email"
              name="email"
              required
              placeholder="info@site.com"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control  mx-auto">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input-group">
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control mx-auto">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <label className="input-group">
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control py-2 my-10">
          <label className="input-group">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-lg w-full"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Purchase;
