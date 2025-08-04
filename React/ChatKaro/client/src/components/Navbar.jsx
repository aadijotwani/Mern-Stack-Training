import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation().pathname;

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };


  return (
       <div
        className={`${
          location !== "/chat" ? "sticky top-0 z-99" : ""
        } navbar bg-base-100 shadow-lg px-6 py-3 min-h-16 border-b border-base-300`}
      >
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="font-bold text-3xl text-primary">Chatterly</span>
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link 
              to="/" 
              className={`rounded-lg px-4 py-2 transition-colors font-medium ${
                location === "/" ? "bg-primary text-primary-content shadow-md" : "hover:bg-base-200"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/chat" 
              className={`rounded-lg px-4 py-2 transition-colors font-medium ${
                location === "/chat" ? "bg-primary text-primary-content shadow-md" : "hover:bg-base-200"
              }`}
            >
              Chat
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className={`rounded-lg px-4 py-2 transition-colors font-medium ${
                location === "/profile" ? "bg-primary text-primary-content shadow-md" : "hover:bg-base-200"
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`rounded-lg px-4 py-2 transition-colors font-medium ${
                location === "/about" ? "bg-primary text-primary-content shadow-md" : "hover:bg-base-200"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/settings" 
              className={`rounded-lg px-4 py-2 transition-colors font-medium ${
                location === "/settings" ? "bg-primary text-primary-content shadow-md" : "hover:bg-base-200"
              }`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <div className="flex gap-3">
          <Link 
            to="/login" 
            className="btn btn-outline btn-sm px-6 font-medium hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="btn btn-primary btn-sm px-6 font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 bg-gradient-to-r from-primary to-primary-focus"
          >
            Sign Up
          </Link>
        </div>
        <div className="divider divider-horizontal mx-2"></div>
        <select
          className="select select-bordered select-sm w-auto min-w-24 font-medium shadow-sm hover:shadow-md transition-shadow"
          value={theme}
          onChange={handleThemeChange}
        >
          <option disabled>🎨 Theme</option>
          <option value="light">☀️ Light</option>
          <option value="dark">🌙 Dark</option>
          <option value="cupcake">🧁 Cupcake</option>
          <option value="synthwave">🐍 Slytherin</option>
          <option value="retro">📻 Retro</option>
          <option value="cyberpunk">🤖 Cyberpunk</option>
          <option value="valentine">💕 Valentine</option>
          <option value="halloween">🎃 Halloween</option>
          <option value="aqua">🌊 Aqua</option>
          <option value="pastel">🎨 Pastel</option>
          <option value="forest">🌲 Forest</option>
          <option value="lemonade">🍋 Lemonade</option>
          <option value="black">⚫ Black</option>
          <option value="caramellatte">☕ Caramel Latte</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
