import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(loading){
      <Loading></Loading>
  }

  if(user){
      navigate('/home')
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email,password)
    console.log(email, password);
  };

  return (
    <div className="mb-24 w-64 lg:w-96 mx-auto  overflow-hidden">
      <form onSubmit={handleLogin}>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <label class="input-group">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="info@site.com"
              required
              class="input input-bordered w-full"
            />
          </label>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Your Password</span>
          </label>
          <label class="input-group">
            <span>PasW</span>
            <input
              type="password"
              name="password"
              required
              placeholder="Your Password"
              class="input input-bordered w-full"
            />
          </label>
        </div>
        {error && (
        <>
          <div class="alert w-96 mx-auto my-2 shadow-sm">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error.message}</span>
            </div>
          </div>
        </>
      )}
        <div class="form-control py-2 my-10">
          <label class="input-group">
            <input
              type="submit"
              value="Login"
              class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full"
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
