import React from "react";
import LoginForm from "./LoginForm";
import { Outlet } from "react-router-dom";
import "./login.css";

const LoginCon = () => {
  return (
    <div className="grid container">
      <LoginForm />
      <Outlet />
    </div>
  );
};

export default LoginCon;
