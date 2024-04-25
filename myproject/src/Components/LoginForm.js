import React, { useEffect, useState } from "react";
import "./login.css";
import $ from "jquery";

const heading = { marginTop: "-5.8rem", marginLeft: "3.5px" };

const LoginForm = () => {
  useEffect(() => {
    document.title = "Login | SignUp";
    $(window).on("load", function () {
      document.title = "Login | SignUp";
    });
  }, []);

  return (
    <div className="resiz ml-36 mt-36 h-96 mb-20" style={{ fontWeight: "500" }}>
      <hr className="w-44 bg-white border-t-4 mt-24 tran" />
      <p className="text-8xl w-auto text-blue-950 name mt-24" style={heading}>
        The
        <br />
        Wearables
      </p>
      <p
        className="text-sm text-white mt-24 -ml-6 f-400"
        style={{ width: "550px" }}
      >
        A wristband is a wearable band made of a flexible material such as
        silicone, plastic, or fabric. Wristbands are often used for
        identification, access control, or promotional purposes. They can also
        be used to track activities or monitor health data.
      </p>
    </div>
  );
};

export default LoginForm;
