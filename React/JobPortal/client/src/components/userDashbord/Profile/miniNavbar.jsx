import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

const miniNavbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-200/80 via-sky-200/80 to-pink-200/70 h-22 w-1/2 shadow-xl rounded-4xl flex gap-6 px-4 py-2">
        <div className="flex flex-col items-center justify-center bg-white rounded-3xl px-3 w-1/4 ">
          <span className="text-2xl ">
           <TiHomeOutline /> 
          </span>
          <button className="text-xl font-semibold">Home</button>
        </div>

        <div className="flex flex-col items-center justify-center bg-white rounded-3xl px-3 w-1/4">
          <span className="text-2xl">
            <MdOutlineWorkOutline />
          </span>
          <button className="text-xl font-semibold">Work</button>
        </div>

        <div className="flex items-center gap-4 justify-center bg-white rounded-3xl px-3 w-1/2">
          <span className="text-3xl">
            <BiEditAlt />
          </span>
          <button className="text-xl font-semibold">Edit</button>
        </div>
      </div>
    </>
  );
};

export default miniNavbar;
