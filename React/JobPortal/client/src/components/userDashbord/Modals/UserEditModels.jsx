import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from "../../../config/api";

const UserEditModels = ({ isOpen, isClosed }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {}
  );

  

//raj sir ismai error waala code kaisia banau for invalid url help me pls !!!!!

const validate = () => {

  let formError = {};
  setError("");

  if(!/^[A-Za-z\s]+$/.test(userData.firstName) || userData.firstName.trim() < 3){
    formError.firstName = "First name should be at least 3 characters long and contain only letters and spaces.";
  }

  if(!/^[A-Za-z\s]+$/.test(userData.lastName) || userData.lastName.trim() < 3){
    formError.lastName = "Last name should be at least 3 characters long and contain only letters and spaces.";
  }


  setError(formError);
  return Object.keys(formError).length === 0;
}




  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(!validate()){
      setLoading(false);
      return;
    }

    try {
      const res = await axios.put("/auth/update", userData);
      console.log("Updated user data:", userData);
      sessionStorage.setItem("user", JSON.stringify(res.data.data));
      setUserData(res.data.data);

      isClosed();
    } catch (error) {
      console.error("Error updating user:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center pt-20 z-50 ">
        <div className="bg-sky-100 h-[85vh] w-[95vh] rounded-3xl shadow-2xl shadow-black/50 p-6 flex flex-col gap-4 overflow-y-auto">
          <div className="flex items-center justify-between sticky top-0 bg-sky-100 px-2 rounded-xl">
            <h1 className="text-3xl font-bold border-b-4 pb-0 border-b-amber-600">
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
                <label className="text-lg font-semibold text-black-600 mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  className="shadow-sm shadow-black/25 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
                {error.firstName && (
                  <p className="text-red-500 text-sm">{error.firstName}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">
                  Last Name:
                </label>
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
                <label className="text-lg font-semibold text-black-600 mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  className="shadow-sm shadow-black/25 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white "
                  placeholder="Enter your email"
                  onChange={handleChange}
                  // disabled
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">
                  Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  className="shadow-sm shadow-black/25 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-black-600 mb-1">
                  Address:
                </label>
                <textarea
                  name="address"
                  rows="3"
                  className="shadow-sm shadow-black/25 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none bg-white"
                  value={userData.address || ""}
                  placeholder="Enter your address"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="">
              <h2 className="text-xl font-semibold text-black-700 border-b-2 border-green-300">
                Social Links
              </h2>

              <div className="flex flex-col gap-4 pt-5">
                <div className="flex flex-col pb-1">
                  <label className="text-lg font-semibold text-black-600 mb-1">
                    LinkedIn:
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={userData.linkedin || ""}
                    className="shadow-sm shadow-black/25 bg-white rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="https://linkedin.com/in/your-profile"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-lg font-semibold text-black-600 mb-1">
                    GitHub:
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={userData.github || ""}
                    className="shadow-sm shadow-black/25 bg-white rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="https://github.com/your-username"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-lg font-semibold text-black-600 mb-1">
                    Twitter:
                  </label>
                  <input
                    type="url"
                    name="twitter"
                    value={userData.twitter || ""}
                    className="shadow-sm shadow-black/25 bg-white rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="https://twitter.com/your-username"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-lg font-semibold text-black-600 mb-1">
                    Facebook:
                  </label>
                  <input
                    type="url"
                    name="facebook"
                    value={userData.facebook || ""}
                    className="shadow-sm shadow-black/25 bg-white rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="https://facebook.com/your-profile"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-lg font-semibold text-black-600 mb-1">
                    Instagram:
                  </label>
                  <input
                    type="url"
                    name="instagram"
                    value={userData.instagram || ""}
                    className="shadow-sm shadow-black/25 bg-white rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="https://instagram.com/your-username"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-6 pt-4 border-t border-black-300">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-200"
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditModels;
