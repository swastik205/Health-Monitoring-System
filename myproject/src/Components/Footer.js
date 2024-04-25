import React from "react";
import style from "./all/marble-paint.png";
import twitter from "./all/twitter.png";
import insta from "./all/instagram.png";
import lin from "./all/linkedin.png";

const Footer = () => {
  return (
    <>
      <div
        className="bg-blue-950 w-full mt-32 grid grid-cols-2"
        style={{
          height: "420px",
          gridTemplateColumns: "800px 840px",
          maxWidth: "2500px",
          minWidth: "1640px",
        }}
      >
        <div className="relative">
          <img
            src={style}
            className="rotate-90 absolute z-0 -top-10 left-24"
            style={{ width: "430px", height: "400px" }}
          />
          <p className="absolute bg-white top-24 left-36 font-bold tracking-wider text-blue-900 z-10 text-5xl">
            The <br /> Wearables.
          </p>
        </div>
        <div className="w-full flex-row">
          <div className="h-36 flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Share Your Experience"
                className="h-10 left-0 text-white pl-5 focus:pl-5 focus:border-2 outline-none pr-12 absolute bg-transparent border-2 top-10 rounded-full"
                style={{ width: "540px" }}
              />
              <button
                className="h-10 text-lg tracking-wider focus:tracking-normal z-10 absolute -ml-5 bg-white rounded-full w-32 top-10"
                style={{ right: "218px" }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div
              className="grid"
              style={{ gridTemplateColumns: "repeat(3, minmax(0, 250px))" }}
            >
              <div>
                <p className="text-white font-semibold text-lg mb-7">Authors</p>
                <p className="text-white/70 mb-3">Swastik Majumder</p>
                <p className="text-white/70 mb-3">Shivam Mandal</p>
                <p className="text-white/70">Saptak Halder</p>
              </div>
              <div>
                <p className="text-white font-semibold text-lg mb-7">About</p>
                <p className="text-white/70 mb-3">About Us</p>
                <p className="text-white/70">Research</p>
              </div>
              <div>
                <p className="text-white font-semibold text-lg mb-7">Support</p>
                <p className="text-white/70 mb-3">Support Center</p>
                <p className="text-white/70">Contact</p>
              </div>
            </div>
          </div>
          <hr
            className="bg-white/70 mt-14"
            style={{ width: "650px", height: "1px" }}
          />
          <div className="flex-1 relative">
            <p className="absolute left-0 text-white/70 top-5">
              All rights reserved 2024
            </p>
            <img
              src={twitter}
              className="absolute w-6 mr-4 top-5"
              style={{ right: "17rem" }}
            />
            <img src={insta} className="absolute w-6 right-60 mr-2 top-5" />
            <img
              src={lin}
              className="absolute w-6 right-52 top-5"
              style={{ width: "22px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
