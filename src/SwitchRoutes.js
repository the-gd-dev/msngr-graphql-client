import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage";
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";
import Messenger from "./containers/Messenger/Messenger";
const SwitchRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/messenger" exact element={<Messenger />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
    </Router>
  );
};
export default SwitchRoutes;
