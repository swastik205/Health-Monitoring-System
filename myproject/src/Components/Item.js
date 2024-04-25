import React, { useEffect, useState } from "react";
import rArr from "./arrow-small-right.svg";
import "./items.css";

const Items = (props) => {
  const [style1, setStyle1] = useState(
    "text-red-100 text-6xl font-semibold mt-6 ml-6 inline-block z-10 "
  );
  const [texSh, setTexSh] = useState({ textShadow: "-6px 3px #dc2626" });
  const [unitSh, setUnitSh] = useState({ textShadow: "-2px 2px #dc2626" });
  const [val1, setVal1] = useState("text-red-200 font-semibold text-7xl");
  const [unit1, setUnit1] = useState(
    "text-red-200 absolute bottom-7 -left-4 font-semibold text-3xl"
  );
  const [icon, setIcon] = useState(
    "absolute right-7 bottom-7 rounded-full bg-rose-500"
  );
  const [desc, setDesc] = useState(
    "bg-rose-500 absolute pl-2.5 pt-1.5 pr-4 text-base rounded-r-3xl rounded-b-3xl rounded-t-xl w-40 h-24 text-white bottom-7 right-5 des"
  );

  useEffect(() => {
    switch (props.id) {
      case 1:
        setStyle1(
          "text-blue-100 text-6xl font-semibold mt-8 ml-8 inline-block z-10"
        );
        setTexSh({ textShadow: "-6px 3px #2563eb" });
        setUnitSh({ textShadow: "-2px 2px #2563eb" });
        setVal1("text-blue-100 font-semibold text-7xl");
        setUnit1(
          "text-blue-100 font-semibold absolute bottom-8 -left-4 text-3xl"
        );
        setIcon("absolute right-5 bottom-7 rounded-full bg-blue-500");
        setDesc(
          "bg-blue-500 absolute pl-2.5 pt-1.5 pr-4 text-base rounded-r-3xl rounded-b-3xl rounded-t-xl w-44 h-24 text-white bottom-7 right-5 des"
        );
        break;

      case 2:
        setStyle1(
          "text-orange-100 text-6xl font-semibold ml-4 mt-5 inline-block z-10"
        );
        setTexSh({ textShadow: "-6px 3px #ea580c" });
        setUnitSh({ textShadow: "-2px 2px #ea580c" });

        setVal1("text-orange-100 font-semibold text-7xl left-8 bottom-7");
        setIcon("absolute right-7 bottom-7 rounded-full bg-amber-500");
        setUnit1(
          "text-orange-100 font-semibold text-4xl absolute bottom-8 -left-4"
        );
        setDesc(
          "bg-amber-500 absolute pl-2.5 pt-1.5 pr-4 text-base rounded-r-3xl rounded-b-3xl rounded-t-xl w-40 h-24 text-white bottom-7 right-5 des"
        );
        break;

      default:
        break;
    }
  }, [props.id]);

  let { iconp, title1, title2, val, unit, descp, rem } = props;
  return (
    <>
      <div
        className="bg-white/10 grid item-container m-1 h-72 hover:m-0 hover:bg-white/20 w-full"
        style={{ borderRadius: "50px", transitionDuration: "350ms" }}
      >
        <img className="h-40 p-2 top-4 icon left-3 inline" src={iconp} />
        <div className={style1 + "styles"} style={texSh}>
          {title1}
          <br />
          {title2}
        </div>
        <div
          className={
            "val" +
            (val === "Retake"
              ? " mt-4 pl-3"
              : " items-center flex justify-center")
          }
        >
          <p className={val1} style={texSh}>
            {val}
          </p>
        </div>
        <div className="relative unit1">
          <p className={unit1} style={unitSh}>
            {unit}
          </p>
        </div>
        <div className="relative desc">
          <p className={val === "Retake" ? "" : desc}>
            {descp}
            <br />
            {rem}
          </p>
          <button className={icon}>
            <img src={rArr} className="h-10" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;
