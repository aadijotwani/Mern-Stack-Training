import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaHeart, FaStar, FaBolt, FaComments, FaSmile, FaRocket, FaPalette, FaMagic } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-primary/10 relative overflow-hidden">
      {/* Random Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse [animation-duration:3s]"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/15 rounded-full blur-2xl animate-bounce [animation-duration:4s]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-accent/8 rounded-full blur-xl animate-pulse [animation-duration:5s]"></div>
        <div className="absolute top-2/3 right-1/3 w-28 h-28 bg-primary/12 rounded-full blur-2xl animate-bounce [animation-duration:3.5s]"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-secondary/10 rounded-full blur-xl animate-pulse [animation-duration:6s]"></div>
        <div className="absolute top-40 left-20 w-20 h-20 bg-accent/15 rounded-full blur-2xl animate-bounce [animation-duration:4.5s]"></div>
        <div className="absolute bottom-40 left-1/2 w-32 h-32 bg-primary/8 rounded-full blur-xl animate-pulse [animation-duration:7s]"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-secondary/12 rounded-full blur-2xl animate-bounce [animation-duration:5.5s]"></div>
        
        {/* Additional animated glow spots */}
        <div className="absolute top-16 right-1/3 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-ping [animation-duration:4s]"></div>
        <div className="absolute bottom-16 left-16 w-20 h-20 bg-accent/18 rounded-full blur-xl animate-pulse [animation-duration:6s]"></div>
        <div className="absolute top-1/4 left-1/2 w-12 h-12 bg-secondary/25 rounded-full blur-md animate-bounce [animation-duration:3s]"></div>
        <div className="absolute bottom-1/4 right-16 w-28 h-28 bg-primary/15 rounded-full blur-2xl animate-ping [animation-duration:5s]"></div>
        <div className="absolute top-3/4 left-1/4 w-18 h-18 bg-accent/20 rounded-full blur-lg animate-pulse [animation-duration:4s]"></div>
        <div className="absolute bottom-3/4 right-1/2 w-22 h-22 bg-secondary/18 rounded-full blur-xl animate-bounce [animation-duration:3.5s]"></div>
      </div>

      {/* Doodle Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Floating React Icons with random movement */}
        <FaHeart className="absolute top-20 left-20 text-4xl text-red-500 animate-pulse [animation-duration:2s] hover:animate-ping" />
        <FaStar className="absolute top-32 right-32 text-3xl text-yellow-500 animate-spin [animation-duration:2.5s] hover:animate-spin" />
        <FaBolt className="absolute top-60 left-40 text-5xl text-blue-500 animate-pulse [animation-duration:1.5s] hover:animate-bounce" />
        <FaComments className="absolute bottom-40 right-20 text-4xl text-green-500 animate-bounce [animation-duration:2s] hover:animate-pulse" />
        <FaSmile className="absolute bottom-60 left-32 text-3xl text-yellow-400 animate-spin [animation-duration:3s] hover:animate-spin" />
        <FaRocket className="absolute top-40 right-60 text-4xl text-purple-500 animate-bounce [animation-duration:2s] hover:animate-ping" />
        <FaPalette className="absolute bottom-20 left-60 text-3xl text-pink-500 animate-pulse [animation-duration:1.5s] hover:animate-bounce" />
        <FaMagic className="absolute top-80 left-80 text-4xl text-indigo-500 animate-bounce [animation-duration:2.5s] hover:animate-spin" />
        
        {/* More scattered icons with hover effects */}
        <FaHeart className="absolute top-96 right-40 text-2xl text-red-400 opacity-70 animate-pulse [animation-duration:2.5s] hover:animate-bounce" />
        <FaStar className="absolute bottom-32 right-80 text-2xl text-yellow-400 opacity-70 animate-spin [animation-duration:2s] hover:animate-ping" />
        <FaBolt className="absolute top-20 right-20 text-3xl text-blue-400 opacity-80 animate-pulse [animation-duration:2s] hover:animate-spin" />
        <FaComments className="absolute bottom-80 left-20 text-3xl text-green-400 opacity-80 animate-bounce [animation-duration:3s] hover:animate-pulse" />
        <FaSmile className="absolute top-52 left-96 text-2xl text-yellow-300 opacity-70 animate-spin [animation-duration:1.5s] hover:animate-bounce" />
        <FaRocket className="absolute bottom-96 right-96 text-3xl text-purple-400 opacity-80 animate-bounce [animation-duration:2s] hover:animate-ping" />
        
        {/* Additional floating icons for more coverage */}
        <FaHeart className="absolute top-10 left-1/3 text-2xl text-red-300 opacity-60 animate-bounce [animation-duration:3.5s] hover:animate-spin" />
        <FaStar className="absolute bottom-10 left-1/4 text-3xl text-yellow-300 opacity-60 animate-spin [animation-duration:3s] hover:animate-ping" />
        <FaBolt className="absolute top-1/3 right-10 text-2xl text-blue-300 opacity-60 animate-bounce [animation-duration:4s] hover:animate-pulse" />
        <FaComments className="absolute bottom-1/3 right-1/3 text-3xl text-green-300 opacity-60 animate-pulse [animation-duration:3.5s] hover:animate-bounce" />
        <FaSmile className="absolute top-2/3 left-10 text-2xl text-yellow-200 opacity-60 animate-spin [animation-duration:3s] hover:animate-spin" />
        <FaRocket className="absolute bottom-2/3 right-1/4 text-3xl text-purple-300 opacity-60 animate-pulse [animation-duration:4.5s] hover:animate-ping" />
        <FaPalette className="absolute top-1/4 left-2/3 text-2xl text-pink-300 opacity-60 animate-bounce [animation-duration:2.5s] hover:animate-pulse" />
        <FaMagic className="absolute bottom-1/4 left-1/2 text-3xl text-indigo-300 opacity-60 animate-pulse [animation-duration:3.5s] hover:animate-spin" />
      </div>
      
      <div className="hero-content text-center max-w-6xl relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8">
            <img src={logo} alt="Chatterly" className="h-20 mx-auto mb-8 drop-shadow-lg" />
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Chat
              </span>
              <span className="text-base-content">terly</span>
            </h1>
            <p className="text-xl md:text-2xl text-base-content/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Where conversations come alive. Experience the future of messaging with style, security, and simplicity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/register" 
              className="btn btn-primary btn-lg px-12 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Chatting
            </Link>
            <Link 
              to="/login" 
              className="btn btn-outline btn-lg px-12 text-lg hover:btn-primary transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center p-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/20 text-primary rounded-full w-16 h-16 flex items-center justify-center">
                    <FaBolt className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="card-title text-xl mb-2">Lightning Fast</h3>
                <p className="text-base-content/70">Real-time messaging with instant delivery and zero lag</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center p-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/20 text-secondary rounded-full w-16 h-16 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="card-title text-xl mb-2">Secure & Private</h3>
                <p className="text-base-content/70">End-to-end encryption keeps your conversations private</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center p-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-accent/20 text-accent rounded-full w-16 h-16 flex items-center justify-center">
                    <FaHeart className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="card-title text-xl mb-2">Simply Beautiful</h3>
                <p className="text-base-content/70">Intuitive design that feels natural and delightful</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Hero;

