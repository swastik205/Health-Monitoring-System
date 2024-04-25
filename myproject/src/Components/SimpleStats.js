import React from "react";
import calorie from "./all/calories.png";

function SimpleStats() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="h-20 ml-11 mr-1 mb-1 bg-blue-900/95 rounded-xl hover:bg-blue-900 relative">
        <p className="text-white text-xl hover:underline left-4 font-medium top-3 absolute">
          Weight
        </p>
        <p
          className="text-white/75 hover:underline font-normal absolute bottom-4 left-4"
          style={{ fontSize: "10.5px" }}
        >
          Change your weight here
        </p>
        <p className="text-white text-6xl right-11 top-3 font-medium absolute">
          86
        </p>
        <p className="text-white text-xl right-5 bottom-3 font-normal absolute">
          kg
        </p>
      </div>
      <div className="h-20 mr-11 ml-1 mb-1 bg-blue-900/95 hover:bg-blue-900 relative rounded-xl">
        <div className="bg-white top-2 rounded-full left-3 h-16 w-16 absolute">
          <div className="bg-blue-300 top-1 rounded-full left-1 h-14 w-14 border-4 border-blue-950 absolute">
            <img src={calorie} className="h-4 absolute top-1 left-4" />
            <p className="text-blue-950 text-2xl absolute left-2.5 top-4 font-bold">
              35
            </p>
          </div>
          <p
            className="text-blue-950 bg-white px-1 text-center rounded-full text-sm font-medium absolute -top-0.5"
            style={{ right: "-25px" }}
          >
            kcal
          </p>
        </div>
        <p className="text-white text-4xl absolute font-semibold left-24 ml-2 top-5">
          Calories
        </p>
      </div>
    </div>
  );
}

export default SimpleStats;
