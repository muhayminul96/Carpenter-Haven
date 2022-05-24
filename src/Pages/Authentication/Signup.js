import { async } from "@firebase/util";
import React from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";

const Signup = () => {
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
] = useCreateUserWithEmailAndPassword(auth);
const [updateProfile, updating, updateError] = useUpdateProfile(auth);

   const handleSignup = async (event)=>{
       event.preventDefault()
       const name = event.target.name.value
       const email = event.target.email.value
       const password = event.target.password.value
       const confirmPassword = event.target.confirmPassword.value
       console.log(name,email,password,confirmPassword)

       if(password === confirmPassword){
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('update done');
        navigate('/home');

       }
       else{
           alert('password not match')
       }
   }
  return (
    <div className="mb-24">
      <h2 className="text-4xl my-10 font-bold text-primary">Please Signup</h2>
      <form onSubmit={handleSignup}>
        <div class="form-control w-96 mx-auto">
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
        <div class="form-control w-96 mx-auto">
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
        <div class="form-control w-96 mx-auto">
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
        <div class="form-control w-96 mx-auto">
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
        <div class="form-control w-96 mx-auto my-10">
          <label class="input-group">
            <input
              type="submit"
              value="Sign Up"
              class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full"
            />
          </label>
        </div>
      </form>
      <div className="w-96 mx-auto mb-2">
        <p>
          already have account?{" "}
          <button
            onClick={() => {
              navigate("/login");
            }}
            class="btn btn-link"
          >
            Login
          </button>{" "}
        </p>
      </div>
      <div class="divider my-4"></div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
