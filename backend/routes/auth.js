const express = require("express");
const Login = require("../models/Login");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginUser = require("../middleware/loginUser");
const dotenv = require("dotenv");
dotenv.config();
router.post(
  "/",
  [
    body("username", "Username must be of 3 characters").isLength({ min: 3 }),
    body("email", "Enter Valid Email").isEmail().isLength({ min: 3 }),
    body("password", "Select a strong password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { username, email, password } = req.body;
      let logs = await Login.findOne({ username });
      if (logs) {
        return res
          .status(400)
          .json({ error: "same document can't be updated" });
      }

      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(password, salt);

      // for creating a new User
      logs = await Login.create({
        username,
        email,
        password: pass,
      });

      const data = {
        logs: {
          id: logs.id,
        },
      };

      const authToken = jwt.sign(data, process.env.JWT_SIGN);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error 500! Please Troubleshoot");
    }
  }
);

router.post(
  "/check",
  [
    body("username", "Username must be of 3 characters").isLength({ min: 3 }),
    body("password", "Password Cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      var logs = await Login.findOne({ username });
      if (!logs) {
        return res.status(400).json({ errors: "enter correct credentials" });
      }
      const checking = await bcrypt.compare(password, logs.password);
      if (!checking) {
        return res.status(400).json({ errors: "enter correct credentials" });
      }

      const data = {
        logs: {
          id: logs.id,
        },
      };
      1;
      const authToken = jwt.sign(data, process.env.JWT_SIGN);
      res.json({ authToken });
      // res.json(authToken);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
);

router.post("/details", loginUser, async (req, res) => {
  try {
    const userId = req.logs.id;
    console.log(userId);
    const logs = await Login.findById(userId).select("-password");
    res.send(logs);
  } catch (error) {
    console.error(error.message);
  }
});
module.exports = router;
