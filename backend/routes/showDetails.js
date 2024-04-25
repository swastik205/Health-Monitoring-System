const express = require("express");
const Details = require("../models/Details");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const dotenv = require("dotenv");

let f1, f2, f3;
let hranal, hrrem;
let spo2anal, spo2rem;
let tempanal, temprem;

dotenv.config();

const dataRes = (spo2, hr, temp) => {
  if (temp != null) {
    if (temp < 95 && temp > 60) {
      tempanal = "Hypothermia";
      temprem = "Consult Physician";
    } else if (temp > 95 && temp < 100) {
      tempanal = null;
      temprem = "Vitals Normal";
    } else if (temp >= 100 && temp < 104) {
      tempanal = "Fever";
      temprem = "Consult Physician";
    } else if (temp >= 104) {
      tempanal = "Hyperpyrexia";
      temprem = "Consult Physician";
    }
  } else {
    tempanal = null;
    temprem = null;
  }
  if (hr != null) {
    if (hr < 60 && hr > 30) {
      hranal = "Bradycardia";
      hrrem = "Consult Physician";
    } else if (hr >= 60 && hr < 100) {
      hranal = null;
      hrrem = "Vitals Normal";
    } else if (hr >= 100) {
      hranal = "Tachycardia";
      hrrem = "Consult Physician";
    }
  } else {
    hranal = null;
    hrrem = null;
  }
  if (spo2 != null) {
    if (spo2 < 95 && spo2 > 60) {
      spo2anal = "Hypothermia";
      spo2rem = "Consult Physician";
    } else if (spo2 > 95 && spo2 < 100) {
      spo2anal = null;
      spo2rem = "Vitals Normal";
    } else if (spo2 >= 100) {
      spo2anal = "Fever";
      spo2rem = "Consult Physician";
    }
  } else {
    spo2anal = null;
    spo2rem = null;
  }
};

const fetchData = async () => {
  const res = await fetch(process.env.REACT_IOT_API, {
    method: "GET",
  });
  const data = await res.json();
  const dataArr = Object.values(data["feeds"]);
  for (let i = 0; i < dataArr.length; i++) {
    const ele = dataArr[i];

    f1 = ele["field1"] ? ele["field1"] : f1;
    f2 = ele["field2"] ? ele["field2"] : f2;
    f3 = ele["field3"] ? ele["field3"] : f3;
  }
};

const makeDB = (spo2, hr, temp) => {
  const db = [
    {
      id: 0,
      title1: "Heart",
      title2: "Rate",
      val: hr ? hr : "Retake",
      unit: hr ? "bpm" : "",
      desc: hranal,
      rem: hrrem,
    },
    {
      id: 1,
      title1: "SpO2",
      val: spo2 ? spo2 : "Retake",
      unit: spo2 ? "%" : "",
      desc: spo2anal,
      rem: spo2rem,
    },
    {
      id: 2,
      title1: "Body",
      title2: "Temp",
      val: temp ? Math.round(temp) : "Retake",
      unit: temp ? "°F" : "",
      desc: tempanal,
      rem: temprem,
    },
  ];
  return db;
};

router.post("/details", async (req, res) => {
  try {
    // let user = await Details.find();

    await fetchData();
    dataRes(f1, f2, f3);

    const data = makeDB(f1, f2, f3);
    res.json(data);
  } catch (error) {
    res.status(400).json({ errors: "not found" });
    console.log(error);
  }
});

module.exports = router;
