import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
  const navMenu = (
    <>
      <li>
        <Link to="/">
        Home
        </Link>
      </li>
      <li>
        <a>Item 1</a>
      </li>
      <li>

        {user?
            <p onClick={()=>signOut(auth)}>Logout</p>
            :
            <Link to='/login'>Login</Link>}
      </li>
    </>
  );
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Carpenter Haven
        </Link>
        {user?.displayName&&<Link to="/" className="btn btn-ghost normal-case text-xl">
          Hello {user.displayName}
        </Link>}
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navMenu}</ul>
      </div>
    </div>
  );
};

export default Header;
