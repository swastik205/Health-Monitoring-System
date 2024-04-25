import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <div>
        <p className="text-white text-8xl font-semibold start">
          Have a <br /> Try?
        </p>
        <button
          onClick={() => {
            navigate("/auth/login");
          }}
          className="bg-white rounded-md p-2.5 font-medium mt-10"
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
};

export default Start;
