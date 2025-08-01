import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { role } from "../../public/dummy.js";
import Loading from "../assets/infinite-spinner.svg";
import toast from "react-hot-toast";

import axios from "../config/api";


const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    cfpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // const name = e.target.name;
    // const value = e.target.value;        shorter way to write instead of these 2 lines

    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    const errors = {};
    if (
      !/^[a-zA-Z]+$/.test(registerData.firstName) ||
      registerData.firstName.length < 2 ||
      (registerData.lastName && !/^[a-zA-Z]+$/.test(registerData.lastName))
    ) {
      errors.name =
        "Please enter a valid name (only letters, at least 3 characters)";
      isValid = false;
    }
    if (!/^[a-zA-Z0-9._]+@gmail.com$/.test(registerData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (
      !/^[6-9]\d{9}$/.test(registerData.phone) ||
      registerData.phone.length !== 10
    ) {
      errors.phone = "Please enter a valid phone number (10 digits)";
      isValid = false;
    }
    if (!registerData.role) {
      errors.role = "Please select a state";
      isValid = false;
    }

    if (
      !registerData.password ||
      registerData.password.length < 6 ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?.,_]).{6,20}$/.test(
        registerData.password
      )
    ) {
      errors.password =
        "Password must be at least 6 characters long and contains uppercase letter, lowercase letter, number and special Character";
      isValid = false;
    }

    if (registerData.password !== registerData.cfpassword) {
      errors.cfpassword = "Passwords do not match";
      isValid = false;
    }

    // Set error messages
    setError(errors);
    if (!isValid) {
      toast.error("Please fix the errors before submitting");
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Basic validation
    if (!validate()) {
      setLoading(false);
      return;
    }
    console.log("Registered Data:", registerData);

    try {
      const res = await axios.post("/auth/register", registerData);
      toast.success(res.data.message);
      setRegisterData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        cfpassword: "",
      });
    } catch (error) {
      toast.error(
        `Error ${error?.response?.status || "503"} : ${
          error?.response?.data?.message || "Service Unavailable"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-[89.8vh] p-10 flex items-center justify-center bg-gradient-to-r from-pink-200 to-blue-200">
        <div className="w-full max-w-3xl min-h-fit bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-[#1A3C5A] text-center mb-2">
            Register
          </h1>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid -gap-2">
              <div className="flex gap-3 ">
                <div className="flex items-center gap-5 ">
                  <label className="min-w-fit text-lg font-semibold text-[#1A3C5A] mb-1">
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-[14.7rem] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                    onChange={handleChange}
                    value={registerData.firstName}
                  />
                </div>

                <div className="flex items-center gap-5">
                  <label className="min-w-fit text-lg font-semibold text-[#1A3C5A] mb-1">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-[14.7rem] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                    onChange={handleChange}
                    value={registerData.lastName}
                  />
                </div>
              </div>
              {error.name && (
                <div className="text-red-500 text-sm ">{error.name}</div>
              )}
            </div>

            <div className="grid -gap-2">
              <div className="flex items-center gap-10">
                <label
                  htmlFor="email"
                  className="min-w-fit text-lg font-semibold text-[#1a3c5a] mb-1"
                >
                  Email ID:
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                  onChange={handleChange}
                  value={registerData.email}
                />
              </div>
              {error.email && (
                <div className="text-red-500 text-sm ">{error.email}</div>
              )}
            </div>

            <div className="flex items-center gap-6">
              <div className="grid -gap-2">
                <div className="flex items-center gap-7">
                  <label
                    htmlFor="phone"
                    className="min-w-fit text-lg font-semibold text-[#1a3c5a] mb-1"
                  >
                    Phone No:
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-[16.7rem] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                    onChange={handleChange}
                    value={registerData.phone}
                  />
                </div>
                {error.phone && (
                  <div className="text-red-500 text-sm ">{error.phone}</div>
                )}
              </div>

              <div className="grid -gap-2">
                <div className="flex items-center gap-[1.2rem]">
                  <label
                    htmlFor="state"
                    className="min-w-fit text-lg font-semibold text-[#1a3c5a] mb-1"
                  >
                    I am :
                  </label>
                  <select
                    name="role"
                    className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white w-[14.5rem] px-4 py-2"
                    onChange={handleChange}
                    value={registerData.role}
                  >
                    <option value="">Select Role</option>
                    {role.length ? (
                      role.map((opt, index) => (
                        <option value={opt.value} key={index}>
                          {opt.display}
                        </option>
                      ))
                    ) : (
                      <option value="">--No role Found--</option>
                    )}
                  </select>
                </div>
                {error.role && (
                  <div className="text-red-500 text-sm ">{error.role}</div>
                )}
              </div>
            </div>

            <div className="grid -gap-2">
              <div className="flex items-center gap-8">
                <label
                  htmlFor="password"
                  className="min-w-fit text-lg font-semibold text-[#1A3C5A] mb-1"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                  onChange={handleChange}
                  value={registerData.password}
                />
              </div>
              {error.password && (
                <div className="text-red-500 text-sm ">{error.password}</div>
              )}
            </div>

            <div className="grid -gap-2">
              <div className="flex items-center gap-8">
                <label
                  htmlFor="cfpassword"
                  className="min-w-fit text-lg font-semibold text-[#1A3C5A] mb-1"
                >
                  Confirm <br /> Password:
                </label>
                <input
                  type="text"
                  name="cfpassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
                  onChange={handleChange}
                  value={registerData.cfpassword}
                />
              </div>
              {error.cfpassword && (
                <div className="text-red-500 text-sm ">{error.cfpassword}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1A3C5A] text-white font-bold rounded-lg hover:bg-[#FF4081] transition-colors duration-200"
            >
              {loading ? (
                <div className="flex gap-3 justify-center items-center h-full">
                  <img src={Loading} alt="" className="h-[1em]" />
                  <span>Creating Account ...</span>
                </div>
              ) : (
                "Create Account"
              )}
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
