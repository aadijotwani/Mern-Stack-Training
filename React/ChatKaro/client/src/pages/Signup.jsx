import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../config/api";
import logo from "../assets/logo.png";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    const errors = {};

    // if (!/^[a-zA-Z\s]+$/.test(userData.name)) {
    //   errors.name =
    //     "Please enter a valid name (only letters, at least 3 characters)";
    //   isValid = false;
    // }
    // if (!/^[a-zA-Z0-9._]+@gmail.com$/.test(userData.email)) {
    //   errors.email = "Please enter a valid email address";
    //   isValid = false;
    // }
    // if (userData.password !== userData.confirmPassword) {
    //   errors.confirmPassword = "Passwords do not match";
    //   isValid = false;
    // }

    // setError(errors);
    // if (!isValid) {
    //   toast.error("Please fix the errors before submitting");
    // }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    //basic validation
    if (!validate()) {
      setIsLoading(false);
      return ;
    }
    console.log("Regsitered Data", userData);

    try {
     const res = await api.post("/auth/register", userData);
      toast.success(res.data.message);
      sessionStorage.setItem("user", JSON.stringify(res.data.data));
      setUserData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(
        ` Error ${error.response?.data?.status || "503"} : ${
          error.response?.data?.message || "Service Unavailable"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-base-200 to-secondary/20 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      {/* Chat bubbles decoration */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary text-xs">Hello!</div>
        </div>
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-secondary text-xs">
            Hi there!
          </div>
        </div>
      </div>
      <div className="absolute bottom-32 left-16 opacity-20">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent text-xs">Welcome!</div>
        </div>
      </div>

      <div className="card w-full max-w-md bg-base-100/90 backdrop-blur-sm shadow-2xl border border-base-300/50 relative z-10">
        <div className="card-body">
          <div className="text-center mb-6">
            <div className="avatar placeholder mb-4">
              <div className=" text-primary-content rounded-full w-30">
                <img src={logo} alt="" className="h-20" />
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join Chatterly
            </h1>
            <p className="text-base-content/60">
              Create your account to start chatting
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="input input-bordered w-full focus:input-primary"
              />
              {error.name && (
                <span className="text-red-500 text-sm">{error.name}</span>
              )}              
            </div>
            

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full focus:input-primary"
              /> 
              {error.email && (
                <span className="text-red-500 text-sm">{error.email}</span>
              )}
            </div>
            

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`input input-bordered w-full focus:input-primary`}
                //{error.password && <span>{error.password}</span>}
                
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`input input-bordered w-full focus:input-primary ${
                  error.confirmPassword ? "input-error" : ""
                }`}
                required
              />
              {error.confirmPassword && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {error.confirmPassword}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary w-full ${
                  isLoading ? "loading" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary font-semibold">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
