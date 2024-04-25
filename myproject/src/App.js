import LoginForm from "./Components/LoginForm.js";
import Nav from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import "./App.css";
import React, { useContext, useEffect } from "react";
import Home from "./Components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailState from "./context/DetailState.js";
import LoginThing from "./Components/LoginThing.js";
import SignupThing from "./Components/SignupThing.js";
import LoginCon from "./Components/LoginCon.js";
import Start from "./Components/Start.js";

function App() {
  useEffect(() => {
    document.title = "Wearables";
  }, []);

  return (
    <>
      <DetailState>
        <Router>
          <Nav heading="Wearables" />
          <Routes>
            <Route path="auth" element={<LoginCon />}>
              <Route path="start" element={<Start />}></Route>
              <Route path="login" element={<LoginThing />}></Route>
              <Route path="signup" element={<SignupThing />}></Route>
            </Route>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </DetailState>
    </>
  );
}

export default App;
