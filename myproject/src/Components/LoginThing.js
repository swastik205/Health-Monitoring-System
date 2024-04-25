import React, { useState } from "react";
import glogo from "./all/google.svg";
import git from "./all/github.svg";
import "./login.css";
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";

const LoginThing = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [pstyle, setPstyle] = useState(
    "outline-none text-sm border border-black px-3 rounded-2xl mt-2 w-52 p-1 bg-white/0 shadow/3xl placeholder:px-1 placeholder: foc mb-2 focus:bg-white/95 focus:shadow-2xl placeholder:tracking-widest"
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userVal, setUserVal] = useState("Username");
  const [passVal, setPassVal] = useState("Password");

  const submitForm = async (e) => {
    e.preventDefault();

    if (username === "" && password === "") {
      check();
      return;
    }
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/login/check`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.authToken);
        navigate("/");
        // console.log(data);
      } else {
        alert("Enter Correct Credentials");
      }
    } catch (e) {
      console.log(e);
    }

    // console.log(response.json());
  };

  const check = () => {
    if ($("user").value === undefined && $("pass").value === undefined) {
      setPstyle(
        "outline-none placeholder:text-xs placeholder:font-extralight border border-black rounded-2xl mt-2 mb-2 w-52 p-1 px-3 bg-white/0 foc placeholder:px-1  focus:border-2 focus:bg-white/95 leading-5 placeholder:text-red-700 focus:shadow-2xl placeholder:tracking-tight"
      );
      setUserVal("Please enter your username");
      setPassVal("Please enter your password");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white/90 top-44 right-40 grid border-0 rounded-3xl login-form">
        <div className="ml-5 mr-5 text-center text-blue-800 fon grid-rows-1">
          <p className="mt-4 pt-4 mb-2" style={{ fontWeight: "600" }}>
            Log in
          </p>
        </div>
        <form action="POST" className="ml-11 text-sm grid-rows-2">
          <label className="ml-3 tracking-wide text-blue-950">Username</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            id="user"
            placeholder={userVal}
            className={pstyle}
            minLength="5"
          />
          <label className="ml-3 tracking-wide text-blue-950">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="pass"
            placeholder={passVal}
            className={pstyle}
          />
          <input
            type="button"
            value="Register"
            onClick={submitForm}
            className="ml-7 mt-5 shadow-lg bg-blue-950 text-white w-36 text-center text-lg rounded-3xl p-1 text hover:shadow-xl hover:bg-blue-200 h-9 hover:text-black focus: focus:w-32 focus:ml-9 focus:shadow-3xl"
          />
        </form>
        <div className="justify-center">
          <p className="inline ml-16 pl-1">New Here?</p>
          <Link
            to="/auth/signup"
            className="inline ml-1 hover:underline text-blue-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginThing;

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
