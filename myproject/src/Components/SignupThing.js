import React, { useEffect, useState } from "react";
import glogo from "./all/google.svg";
import git from "./all/github.svg";
import "./login.css";
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";

const SignupThing = () => {
  const navigate = useNavigate();
  const [pstyle, setPstyle] = useState(
    "outline-none text-sm border border-black px-3 rounded-2xl mt-2 w-52 p-1 bg-white/0 shadow/3xl placeholder:px-1 placeholder: foc mb-2 focus:bg-white/95 focus:shadow-2xl placeholder:tracking-widest"
  );

  const [userVal, setUserVal] = useState("Username");
  const [userEmail, setUserEmail] = useState("Email");
  const [passVal, setPassVal] = useState("Password");

  const [creds, setCreds] = useState({ username: "", email: "", password: "" });

  const onSubmit = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: creds.username,
        email: creds.email,
        password: creds.password,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("token", data.authToken);
      navigate("/");
      return;
    } else {
      alert("Enter Correct Credentials");
    }

    // console.log(creds.username);
    // console.log(creds.email);
    // console.log(creds.password);
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const check = () => {
    if (
      $("username").value === undefined &&
      $("email").value === undefined &&
      $("password").value === undefined
    ) {
      setPstyle(
        "outline-none placeholder:text-xs placeholder:font-extralight border border-black rounded-2xl mt-2 mb-2 w-52 p-1 px-3 bg-white/0 foc placeholder:px-1  focus:border-2 focus:bg-white/95 leading-5 placeholder:text-red-700 focus:shadow-2xl placeholder:tracking-tight"
      );
      setUserVal("Please enter your username");
      setUserEmail("Please enter your email");
      setPassVal("Please enter your password");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white/90 top-44 right-40 grid border-0 rounded-3xl signup-form">
        <div className="ml-5 mr-5 text-center text-blue-800 fon grid-rows-1">
          <p className="mt-4 pt-4 mb-2" style={{ fontWeight: "600" }}>
            Sign up
          </p>
        </div>
        <form
          action="POST"
          // onSubmit={onSubmit}
          className="ml-11 text-sm grid-rows-2"
        >
          <label className="ml-3 tracking-wide text-blue-950">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={creds.username}
            onChange={onChange}
            placeholder={userVal}
            className={pstyle}
          />
          <label className="ml-3 tracking-wide text-blue-950">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={creds.email}
            onChange={onChange}
            placeholder={userEmail}
            className={pstyle}
          />
          <label className="ml-3 tracking-wide text-blue-950">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={creds.password}
            onChange={onChange}
            placeholder={passVal}
            className={pstyle}
          />
          <input
            type="button"
            value="Submit"
            id="submit"
            onClick={onSubmit}
            name="submit"
            className="ml-7 mt-5 shadow-lg bg-blue-950 text-white w-36 text-center text-lg rounded-3xl p-1 text hover:shadow-xl hover:bg-blue-200 h-9 hover:text-black focus: focus:w-32 focus:ml-9 focus:shadow-3xl"
          />
        </form>
        <div className="justify-center">
          <p className="inline ml-14">Already a User?</p>
          <Link
            to="/auth/login"
            className="inline ml-1 hover:underline text-blue-600"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupThing;

/* <div className="ml-5 mr-5 text-center text-3xl grid-rows-3">
          <button className="w-56 rounded-2xl border border-black/20 h-7 -mt-6 mb-1 relative shadow-sm hover:shadow-md focus:bg-white focus:shadow-lg bg-white/95 f-400">
            <p className="text-black/80 text-sm -ml-4 f-400">
              Sign up with Google
            </p>
            <img
              className="h-4 w-5 absolute right-6"
              style={{ top: "5px" }}
              src={glogo}
            />
          </button>
          <button className="w-56 rounded-2xl border border-black/20 h-7 relative shadow-sm hover:shadow-md focus:bg-white focus:shadow-lg bg-white/95 mb-1.5">
            <p className="text-black/80 text-sm -ml-4 f-400">
              Sign up with GitHub
            </p>
            <img
              className="h-5 w-5 absolute right-6"
              style={{ top: "2px" }}
              src={git}
            />
          </button>
        </div> */
