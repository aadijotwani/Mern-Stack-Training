import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[88.9vh] flex items-center justify-center bg-gradient-to-r from-pink-200 to-blue-200">
        <div className="w-full max-w-3xl min-h-fit bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-[#1A3C5A] text-center mb-2">
            Register
          </h1>
          <form className="flex flex-col gap-6">
            <div className="flex gap-3 ">
              <div className="flex items-center gap-5 ">
                <label className="min-w-fit text-lg font-semibold text-[#1A3C5A] mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  id="fname"
                  className="w-[14.7rem] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                />
              </div>

              <div className="flex items-center gap-5">
                <label className="min-w-fit text-lg font-semibold text-[#1A3C5A] mb-1">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lname"
                  className="w-[14.7rem] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-10">
              <label
                htmlFor="email"
                className="min-w-fit text-lg font-semibold text-[#1a3c5a] mb-1"
              >
                Email ID:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
              />
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-7">
                <label
                  htmlFor="phone"
                  className="min-w-fit text-lg font-semibold text-[#1a3c5a] mb-1"
                >
                  Phone No:
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-[16.7rem] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                />
              </div>

              <div className="flex items-center gap-[1.2rem]">
                <label
                  htmlFor="states"
                  className="min-w-fit text-lg font-semibold text-[#1a3c5a] mb-1"
                >
                  State:
                </label>
                <select
                  id="state"
                  className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white w-[14.5rem] px-4 py-2"
                >
                  <option value="">State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Bihar">Bihar</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Assam">Assam</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Goa">Goa</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <label
                htmlFor="address"
                className="min-w-fit text-lg font-semibold text-[#1a3c5a] mb-1"
              >
                Address
              </label>
              <textarea
                id="address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                rows="3"
              ></textarea>
            </div>

            <div className="flex items-center gap-8">
              <label
                htmlFor="newpassword"
                className="min-w-fit text-lg font-semibold text-[#1A3C5A] mb-1"
              >
                Password:
              </label>
              <input
                type="password"
                id="newpassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
              ></input>
            </div>

            <div className="flex items-center gap-8">
              <label
                htmlFor="renewpassword"
                className="min-w-fit text-lg font-semibold text-[#1A3C5A] mb-1"
              >
                Confirm <br /> Password:
              </label>
              <input
                type="password"
                id="renewpassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
              ></input>
            </div>

            <button
              type="createAccount"
              className="w-full py-3 bg-[#1A3C5A] text-white font-bold rounded-lg hover:bg-[#FF4081] transition-colors duration-200"
            >
              Create Account
            </button>

            <button
              type="reset"
              className="w-full py-3 bg-white border border-[#1A3C5A] text-[#1A3C5A] font-bold rounded-lg hover:bg-[#FF4081] hover:text-white transition-colors duration-200"
            >
              Reset
            </button>
          </form>

          <div className="text-center mt-2">
            <button
              className="text-[#FF4081] hover:underline font-semibold"
              onClick={() => navigate("/Login")}
            >
              Already have an account? / Login Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
