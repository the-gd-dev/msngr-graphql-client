import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";
import Login from "./container/Login/Login";
import SignUp from "./container/SignUp/SignUp";
import Messenger from "./container/Messenger/Messenger";
const SwitchRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};
export default SwitchRoutes;
