import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState("home");

  const location = useLocation().pathname;

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <div
        className={`${
          location !== "/chat" ? "sticky top-0 z-99" : ""
        } navbar border-b border-base-300 bg-base-200 text-base-content flex justify-between items-center`}
      >
        <Link
          to="/"
          className="font-bold text-3xl font-sans hover:text-primary-focus transition-colors"
        >
          <div className="flex items-center space-x-2">
            <img src={logo} className="h-15" />
            <h1 className="text-3xl font-bold text-primary">Chatterly</h1>
          </div>
        </Link>

        {/*Navigation Links*/}
        <ul className="flex space-x-4 text-lg items-center gap-6">
          <li>
            <Link
              to="/"
              className={`cursor-pointer hover:text-primary transition-all duration-200 font-sans text-xl font-medium px-3 py-2 rounded-lg ${
                location === "/" ? "text-primary bg-primary/10 font-semibold shadow-sm" : "text-base-content hover:bg-base-300/50"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`cursor-pointer hover:text-primary transition-all duration-200 font-sans text-xl font-medium px-3 py-2 rounded-lg ${
                location === "/about" ? "text-primary bg-primary/10 font-semibold shadow-sm" : "text-base-content hover:bg-base-300/50"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className={`cursor-pointer hover:text-primary transition-all duration-200 font-sans text-xl font-medium px-3 py-2 rounded-lg ${
                location === "/chat" ? "text-primary bg-primary/10 font-semibold shadow-sm" : "text-base-content hover:bg-base-300/50"
              }`}
            >
              Chat
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`cursor-pointer hover:text-primary transition-all duration-200 font-sans text-xl font-medium px-3 py-2 rounded-lg ${
                location === "/contact" ? "text-primary bg-primary/10 font-semibold shadow-sm" : "text-base-content hover:bg-base-300/50"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="flex space-x-4 text-lg items-center">
          <li>
            <Link 
              to="/signup" 
              className={`btn btn-sm font-sans text-lg font-medium transition-all duration-200 ${
                location === "/signup" ? "btn-primary shadow-md" : "btn-outline hover:btn-primary"
              }`}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className={`btn btn-sm font-sans text-lg font-medium transition-all duration-200 ${
                location === "/login" ? "btn-primary shadow-md" : "btn-ghost hover:btn-primary hover:text-primary-content"
              }`}
            >
              Login
            </Link>
          </li>
          <li>
            <select
              value={theme}
              onChange={handleThemeChange}
              className="select select-bordered select-sm w-32 bg-base-100 text-base-content focus:outline-none focus:border-primary"
            >
              <option disabled>Theme</option>
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
