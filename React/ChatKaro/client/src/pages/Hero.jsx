import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[url('image.png')]">
      <div className="hero-content text-center">
        <div className="max-w-md p-4 bg-gray-700/80 rounded-lg shadow-lg">
          <div className="text-5xl font-bold text-white mb-6 drop-shadow-lg flex items-center justify-center">
            <img src={logo} className="h-30" />
            <span>Chatterly</span>
            
          </div>
          <p className="text-lg text-white opacity-90 mb-8 drop-shadow-md ">
            Connect, chat, and collaborate with friends and colleagues in
            real-time. Experience seamless communication with our modern chat
            platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/chat" className="btn btn-primary btn-lg shadow-lg">
              Start Chatting
            </Link>
            <Link
              to="/about"
              className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
