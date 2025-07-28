import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTheme } from '../contexts/ThemeContext';
import api from '../config/api'; // Adjust the import path as necessary

const Signup = () => {
    
    const { theme, setTheme } = useTheme();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData((prev) => ({...prev, [name] : value}));
  };

    const validate = () => {
    let isValid = true;
    const errors = {};

    if(!/^[a-zA-Z\s]+$/.test(userData.name)) {
      errors.name = "Name can only contain letters and spaces";
      isValid = false;
    }
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }
    if(userData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
        isValid = false;
    }
    if(userData.password !== userData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
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
    setIsLoading(true);
    setError("");   
    try {
        const res = await api.post("/auth/login", loginData);
        toast.success(res.data.message);
        sessionStorage.setItem("user", JSON.stringify(res.data.data))
        setUserData({
            name:"",
            email:"",
            password:"",
            confirmPassword:""
        })
    } catch (error) {
        toast.error(` Error ${error.response?.data?.status || "503"} : ${error.response?.data?.message || "Service Unavailable"}`);
    }
    finally{
        setIsLoading(false);
    }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-primary">Create Account</h1>
            <p className="text-base-content opacity-70 mt-2">Join ChatKaro today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full focus:input-primary"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:input-primary"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="input input-bordered w-full focus:input-primary"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="input input-bordered w-full focus:input-primary"
                value={userData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="cursor-pointer label justify-start">
                <input type="checkbox" className="checkbox checkbox-primary mr-3" required />
                <span className="label-text">
                  I agree to the{' '}
                  <Link to="/terms" className="link link-primary">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="link link-primary">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="space-y-3">
            <button className="btn btn-outline w-full">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-base-content opacity-70">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
