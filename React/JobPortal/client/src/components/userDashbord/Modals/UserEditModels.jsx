import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const UserEditModels = ({ isOpen, isClosed }) => {
  if (!isOpen) return null;

  const [userData, setUserData] = useState(JSON.parse(sessionStorage.getItem("user")))

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData((prev) => ({...prev, [name]: value}))
  };


  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center pt-20 z-50">
        <div className="bg-sky-100 h-[85vh] w-[95vh] rounded-3xl shadow-2xl shadow-black/50 p-6 flex flex-col gap-4 overflow-y-auto">
      

          <div className="flex items-center justify-between sticky top-0 bg-sky-100 p-2 rounded-xl">
            <h1 className="text-3xl font-bold border-b-4 pb-2 border-b-amber-600">
              Edit Your Profile!
            </h1>
            <button
              className="text-4xl text-red-600 hover:rotate-180 duration-300"
              onClick={isClosed}
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-black-700 border-b-2 border-pink-300 pb-1">
                Personal Information
              </h2>
              
              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">First Name:</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={userData.firstName}
                  className="shadow-sm shadow-black/25 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">Last Name:</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={userData.lastName}
                  className="shadow-sm shadow-black/25 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
                  placeholder="Enter your last name"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  value={userData.email}
                  className="shadow-sm shadow-black/25 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">Phone:</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={userData.phone}
                  className="shadow-sm shadow-black/25 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">Address:</label>
                <textarea 
                  name="address" 
                  rows="3"
                  className="shadow-sm shadow-black/25 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none bg-white" 
                  value={userData.address || ""}  
                  placeholder="Enter your address"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-black-700 border-b-2 border-green-300 pb-1">
                Social Links
              </h2>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">LinkedIn:</label>
                <input 
                  type="url" 
                  name="linkedin" 
                  value={userData.linkedIn}
                  className="border border-black-300 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  placeholder="https://linkedin.com/in/your-profile"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">GitHub:</label>
                <input 
                  type="url" 
                  name="github" 
                  className="border border-black-300 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  placeholder="https://github.com/your-username"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">Twitter:</label>
                <input 
                  type="url" 
                  name="twitter" 
                  className="border border-black-300 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  placeholder="https://twitter.com/your-username"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">Facebook:</label>
                <input 
                  type="url" 
                  name="facebook" 
                  className="border border-black-300 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  placeholder="https://facebook.com/your-profile"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">Instagram:</label>
                <input 
                  type="url" 
                  name="instagram" 
                  className="border border-black-300 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  placeholder="https://instagram.com/your-username"
                />
              </div>

             
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6 pt-4 border-t border-black-300">
            <button
              className="px-6 py-3 bg-black-500 text-white rounded-lg font-semibold hover:bg-black-600 transition duration-200"
              onClick={isClosed}
            >
              Cancel
            </button>
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-200"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditModels;
