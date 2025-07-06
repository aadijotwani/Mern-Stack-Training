import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const UserEditModels = ({ isOpen, isClosed }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center pt-20 ">
        <div className="bg-gradient-to-b  from-sky-200 via-sky-50 to-blue-200 h-[80vh] w-[90vh] rounded-3xl shadow-2xl shadow-black/50 p-5 flex flex-col gap-15 overflow-y-auto">
          <div className="flex items-center justify-between border fixed w-[85vh]">
            <h1 className="text-4xl font-bold border-b-4 w-72 border-b-amber-600">
              Edit Your Profile!
            </h1>
            <button
              className="text-5xl text-red-600 hover:rotate-270 duration-300"
              onClick={isClosed}
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>

          <div className="border-2 border-orange-600 min-h-200 mt-20">
            <div className="border h-1/12 flex flex-col">
              <label className="text-2xl font-semibold"> Full Name: </label>
              <input type="text" name="name" className="border h-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditModels;
