import { useState } from "react";
import React from "react";

const Profile = () => {

  const[details, setDetails] = useState(JSON.parse(sessionStorage.getItem("user")));

  return (
    <>
      <div className="h-full w-full p-10">
        <h1 className="font-sans font-bold text-4xl text-slate-800 underline decoration-pink-500 underline-offset-8">
          PROFILE
        </h1>

        <div className="w-full mt-10 border border-black py-2">
          
          <div className="w-40 h-40 border border-red-400 overflow-hidden flex items-center justify-center">
            <img src={details.photo} alt="" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;
