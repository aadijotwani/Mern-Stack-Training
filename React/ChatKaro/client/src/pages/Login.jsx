import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your login logic here
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login submitted:', userData);
    }, 1000);
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
          <div className="chat-bubble chat-bubble-secondary text-xs">Hi there!</div>
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
              <div className=" text-primary-content rounded-full w-40">
                <img src={logo} alt="" className='h-20'/>
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome to Chatterly
            </h1>
            <p className="text-base-content/60">Sign in to start chatting</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
                required
              />
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
                className="input input-bordered w-full focus:input-primary"
                required
              />
              <label className="label">
                <Link to="/forgot-password" className="label-text-alt link link-hover text-primary">
                  Forgot password?
                </Link>
              </label>
            </div>
            
            <div className=" mt-6">
              <button
                type="submit"
                className={`btn btn-primary w-full`}
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>
          
          <div className="divider">OR</div>
          
          <div className="text-center">
            <p className="text-base-content/60">
              Don't have an account?{' '}
              <Link to="/register" className="link link-primary font-semibold">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
