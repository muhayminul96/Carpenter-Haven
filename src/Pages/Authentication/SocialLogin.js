import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <button class="btn btn-secondary">Google Login</button>
    </div>
  );
};

export default SocialLogin;
