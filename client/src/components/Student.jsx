import { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const Student = () => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (!user) navigate("/login");
  });

  return (
    <div className="flex w-full justify-center px-5 py-10">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl">Welcome, Student!</h1>
        <div className="flex justify-between my-5">
          <div>Teachers</div>
          <div># Items Requested</div>
        </div>
      </div>
    </div>
  );
};

export default Student;
