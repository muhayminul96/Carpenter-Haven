import { async } from "@firebase/util";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";

const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/home");
  }

  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    console.log(name, email, password, confirmPassword);

    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      alert("password not match");
    }
  };
  return (
    <div className="mb-24 w-64 lg:w-96 mx-auto  overflow-hidden">
      <h2 className="text-4xl my-10 font-bold text-primary">Please Signup</h2>
      <form onSubmit={handleSignup}>
        <div class="form-control  mx-auto">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <label class="input-group">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              class="input input-bordered w-full"
            />
          </label>
        </div>
        <div class="form-control  mx-auto">
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <label class="input-group">
            <input
              type="email"
              name="email"
              required
              placeholder="info@site.com"
              class="input input-bordered w-full"
            />
          </label>
        </div>
        <div class="form-control  mx-auto">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <label class="input-group">
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              class="input input-bordered w-full"
            />
          </label>
        </div>
        <div class="form-control mx-auto">
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <label class="input-group">
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
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
              value="Sign Up"
              class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full"
            />
          </label>
        </div>
      </form>

      <div className="mx-auto mb-2">
        <div>
          <span>already have account?</span>{" "}
          <button
            onClick={() => {
              navigate("/login");
            }}
            class="btn btn-link"
          >
            Login
          </button>{" "}
        </div>
      </div>
      <div class="divider my-4"></div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
