import React, { useContext, useEffect } from "react";
import Items from "./Item";
import heart from "./all/heart-attack.png";
import temp from "./all/high-temperature.png";
import oxygen from "./all/oxygen1.png";
import detailContext from "../context/DetailContext.js";
import SimpleStats from "./SimpleStats";
import profile from "./all/profilebg.png";
import "./homesty.css";
import { useNavigate } from "react-router-dom";

const imgArr = [heart, oxygen, temp];

const Home = () => {
  const navigate = useNavigate();
  const context = useContext(detailContext);
  const { detail, getAll } = context;
  useEffect(() => {
    // localStorage.removeItem("token");
    if (localStorage.getItem("token") == null) {
      navigate("auth/login");
    }
    // console.log(localStorage.getItem("token"));
    // window.location.reload();
    try {
      getAll();
    } catch (e) {
      document.getElementById("error").innerHTML = "Please Refresh";
    }
    document.title = "Home";
  }, []);

  return (
    <>
      {/* grid grid-cols-1 hom md:grid-cols-2 */}
      <div className="grid grid-cols-1 hom md:grid-cols-2">
        <div
          className="bg-blue-300/90 hom my-8 mx-10 hover:my-4 hover:mx-6 rounded-3xl"
          style={{
            transitionDuration: "500ms",
            height: "700px",
            maxWidth: "972px",
          }}
        >
          <p
            className="text-blue-900 mt-10 text-center text-3xl tracking-wide font-semibold"
            id="hi"
          >
            Welcome Back!
          </p>
          <img className="m-auto" style={{ height: "500px" }} src={profile} />
          {/* <SimpleStats /> */}
          <div className="flex justify-center items-center">
            <button
              onClick={getAll}
              className="text-white error bg-blue-900/95 w-96 text-3xl font-semibold rounded-xl h-16 hover:bg-blue-950"
            >
              Refresh
            </button>
          </div>
        </div>
        <div
          className="m-8 grid grid-cols-1 md:grid-cols-2 gap-4 mb-40"
          style={{ width: "51.5rem" }}
        >
          {detail.map((ele) => {
            return (
              <div key={ele.id}>
                <Items
                  iconp={imgArr[ele.id]}
                  title1={ele.title1}
                  title2={ele.title2}
                  val={ele.val}
                  unit={ele.unit}
                  descp={ele.desc}
                  rem={ele.rem}
                  id={ele.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
