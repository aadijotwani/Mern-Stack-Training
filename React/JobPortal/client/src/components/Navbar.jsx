import React from "react";
import logo from "../assets/image.png";
import { NavLink, useNavigate } from "react-router-dom";// can also use only import {link} form react router dom

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-4 bg-white text-black flex justify-center gap-70 items-center sticky top-0 z-99 w-full">
        <img src={logo} alt="logo" className="h-15" />
        <div className="flex gap-11 font-sans">
          <NavLink to={"/"} className="text-black hover:text-[#ec275f] "> {/*Here also we can directly use <link to={"/"}> */}
            Home
          </NavLink>
          <NavLink to={"/about"} className="text-black hover:text-[#ec275f]">
            About
          </NavLink>
          <NavLink to={"/jobs"} className="text-black hover:text-[#ec275f]">
            Find A Job
          </NavLink>
          <NavLink to={"/contact"} className="text-black hover:text-[#ec275f]">
            Contact
          </NavLink>
        </div>
        <div className="flex gap-3">
          <button
            className="py-4 border px-13 bg-[#ec275f] text-white hover:bg-white hover:text-black rounded-[20px]"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="py-4 px-8 border hover:bg-[#ec275f] hover:text-white rounded-[20px]"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
