import detailContext from "./DetailContext";
import React, { useEffect, useState } from "react";

const DetailState = (props) => {
  var initialDetails = [];
  const [detail, setDetail] = useState(initialDetails);
  const getAll = async () => {
    const response = await fetch("http://localhost:4000/user/details", {
      method: "POST",
    });
    const data = await response.json();
    setDetail(data);
  };

  return (
    <detailContext.Provider value={{ detail, getAll }}>
      {props.children}
    </detailContext.Provider>
  );
};

export default DetailState;
