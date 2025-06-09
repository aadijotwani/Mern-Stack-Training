import React from "react";
import { NavLink ,useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient-to-r from-pink-200 to-blue-200 w-screen h-[88.9vh] flex items-center justify-center">
        <div className="h-[60%] w-[35%] bg-white/30 rounded-[40px] shadow-sm shadow-gray-400 hover:shadow-gray-400 hover:shadow-xl hover:transition duration-1800 flex flex-col gap-15">
          <h1 className="mt-1 ml-4 text-[60px] font-bold bg-gradient-to-br from-gray-900 to-red-700 bg-clip-text text-transparent">
            Login
          </h1>

          <div className="ml-5 mr-5 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-[23px]">User ID:</span>
            <input
              type="text"
              name="Userid"
              id="UserID"
              className="border-b w-[75%] focus:outline-none text-xl focus:ring-0"
            />
            </div>
            

            <div className="flex items-center justify-between">
            <span className="font-extrabold text-[23px]">Password:</span>
            <input
              type="text"
              name="Password"
              id="password"
              className="border-b w-[75%] focus:outline-none text-xl focus:ring-0"
            />
            </div>

            <div className="flex gap-3 items-center text-md text-blue-600 font-bold">
              <input type="checkbox" id="rememMe"/>
              <span>Remember Me</span>
            </div>

          </div>

          <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex item-center justify-center gap-5 font-sans">
              <button className="bg-[#F54677] shadow-sm shadow-gray-900 text-white text-2xl active:bg-white active:text-black font-bold rounded-[13px] w-40 h-13" >Login</button>
              <button className="bg-white shadow-sm shadow-gray-900 text-black text-2xl font-bold active:bg-[#F54677] active:text-white rounded-[13px] w-40 h-13">Reset</button>
          </div>
          <div className="text-[#007BFF] font-bold">
              <button className="hover:text-[#F54677]" onClick={() => navigate("/Register")} >Not Registered? / Create Account</button>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
