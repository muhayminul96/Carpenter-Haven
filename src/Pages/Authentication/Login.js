import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  return (
    <div className="mb-24 w-64 lg:w-96 mx-auto  overflow-hidden">
      <form onSubmit={handleLogin}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="info@site.com"
              required
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Password</span>
          </label>
          <label className="input-group">
            <span>PasW</span>
            <input
              type="password"
              name="password"
              required
              placeholder="Your Password"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {error && (
          <>
            <div className="alert w-96 mx-auto my-2 shadow-sm">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error.message}</span>
              </div>
            </div>
          </>
        )}
        <div className="form-control py-2 my-10">
          <label className="input-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full"
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
            className="btn btn-link"
          >
            Sign Up
          </button>{" "}
        </p>
      </div>
      <div className="divider my-4"></div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
