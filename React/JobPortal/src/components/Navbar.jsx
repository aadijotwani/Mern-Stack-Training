import React from "react";
import logo from "../assets/image.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="p-5 text-black flex justify-center gap-45 items-center">
        <img src={logo} alt="logo" className="h-15" />
        <div className="flex gap-11 font-sans">
          <NavLink to={"/"} className="text-black hover:text-[#F54677] ">
            Home
          </NavLink>
          <NavLink to={"/about"} className="text-black hover:text-[#F54677]">
            About
          </NavLink>
          <NavLink to={"/jobs"} className="text-black hover:text-[#F54677]">
            Find A Job
          </NavLink>
          <NavLink to={"/contact"} className="text-black hover:text-[#F54677]">
            Contact
          </NavLink>
        </div>
        <div className="flex gap-3">
          <button className="py-4 border px-13 hover:bg-[#F54677] hover:text-white">
            Register
          </button>
          <button className="py-4 px-8 border hover:bg-[#F54677] hover:text-white">
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
