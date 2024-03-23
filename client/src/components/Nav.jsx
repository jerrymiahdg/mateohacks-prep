import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Context } from "../App";

const Nav = () => {
  const ctx = useContext(Context);

  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        onAuthStateChanged(auth, (user) => {
          ctx.setUser(user);
        });
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="flex w-full justify-center p-5 border-b border-neutral-800 z-10 bg-neutral-950">
      <div className="flex max-w-5xl w-full justify-between items-center">
        <Link to="/" className="font-bold text-2xl">
          Website
        </Link>
        <div className="flex gap-10">
          {!ctx.user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
          {ctx.user && (
            <>
              <button onClick={logOut}>Logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
