import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./pages/Dashboard/userDashboard";
import RecruiterDashboard from "./pages/Dashboard/recruiterDashboard";
import AdminDashboard from "./pages/Dashboard/adminDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/recruiterDashboard" element={<RecruiterDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;