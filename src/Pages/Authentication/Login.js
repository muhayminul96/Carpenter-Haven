import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <form action="">
        <div class="form-control w-96 mx-auto">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <label class="input-group">
            <span>Name</span>
            <input
              type="text"
              placeholder="Your Name"
              class="input input-bordered"
            />
          </label>
        </div>
        <div class="form-control w-96 mx-auto">
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <label class="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered"
            />
          </label>
        </div>
        <div class="form-control w-96 mx-auto">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <label class="input-group">
            <span>Password</span>
            <input
              type="text"
              placeholder="Password"
              class="input input-bordered"
            />
          </label>
        </div>
        <div class="form-control w-96 mx-auto">
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <label class="input-group">
            <span>Confirm Password</span>
            <input
              type="text"
              placeholder="Confirm Password"
              class="input input-bordered"
            />
          </label>
        </div>
      </form>
      <div className="w-96 mx-auto mb-2">
        <p>
          Are You New?
          <button
            onClick={() => {
              navigate("/signup");
            }}
            class="btn btn-link"
          >
            Sign Up
          </button>{" "}
        </p>
      </div>
      <div class="divider my-4"></div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
