import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
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
      <button onClick={() => signInWithGoogle()} class="btn btn-secondary">
        Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
