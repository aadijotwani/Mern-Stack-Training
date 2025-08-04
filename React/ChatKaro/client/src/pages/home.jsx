import React from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';



const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <div className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Chatterly?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="card-title justify-center">Lightning Fast</h3>
              <p>Real-time messaging with instant delivery</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="card-title justify-center">Secure</h3>
              <p>End-to-end encryption for your privacy</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="card-title justify-center">Global</h3>
              <p>Connect with people from around the world</p>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-base-100">
          <div className="container mx-auto px-4">
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat">
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-primary">250K+</div>
            <div className="stat-desc">Growing every day</div>
          </div>
          <div className="stat">
            <div className="stat-title">Messages Sent</div>
            <div className="stat-value text-secondary">10M+</div>
            <div className="stat-desc">Daily conversations</div>
          </div>
          <div className="stat">
            <div className="stat-title">Countries</div>
            <div className="stat-value">50+</div>
            <div className="stat-desc">Worldwide reach</div>
          </div>
            </div>
          </div>
        </div>

        /* How It Works Section */
          <div className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-16">
                How It Works ✨
              </h2>
              <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-end justify-center gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-dashed border-primary/20 w-64">
              <h3 className="text-xl font-bold mb-2 text-primary">
                Sign Up! 🚀
              </h3>
              <p className="text-gray-600 text-sm">
                Create your free account in just 30 seconds
              </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center h-32">
                <FiArrowRight className="text-6xl  text-primary animate-pulse" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-dashed border-secondary/20 w-64">
              <h3 className="text-xl font-bold mb-2 text-secondary">
                Find Friends! 👥
              </h3>
              <p className="text-gray-600 text-sm">
                Discover amazing people from around the globe
              </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center h-32">
                <FiArrowRight className="text-6xl text-secondary animate-pulse" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-3xl font-bold text-white">3</span>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-dashed border-accent/20 w-64">
              <h3 className="text-xl font-bold mb-2 text-accent" >
                Start Chatting! 💬
              </h3>
              <p className="text-gray-600 text-sm">
                Send messages and build meaningful connections
              </p>
                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              <h4 className="text-3xl font-bold" >
            It's that simple! 🎉
              </h4>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="rating rating-sm mb-4">
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
              </div>
              <p>"Chatterly has revolutionized how I communicate with my team. The interface is clean and intuitive!"</p>
              <div className="mt-4">
            <h4 className="font-semibold">Sarah Johnson</h4>
            <p className="text-sm opacity-70">Product Manager</p>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="rating rating-sm mb-4">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              </div>
              <p>"The security features give me peace of mind. I can chat freely knowing my conversations are protected."</p>
              <div className="mt-4">
            <h4 className="font-semibold">Mike Chen</h4>
            <p className="text-sm opacity-70">Software Developer</p>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="rating rating-sm mb-4">
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
              </div>
              <p>"Amazing app! I've connected with so many interesting people from different cultures."</p>
              <div className="mt-4">
            <h4 className="font-semibold">Emma Rodriguez</h4>
            <p className="text-sm opacity-70">Travel Blogger</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Chatting?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Join millions of users who are already enjoying seamless conversations on Chatterly. 
          Sign up now and experience the future of messaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup" className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-none">
            Get Started Free
          </Link>
          <Link to="/login" className="btn btn-lg btn-outline btn-white text-white border-white hover:bg-white hover:text-primary">
            Sign In
          </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer footer-center p-10 bg-base-300 text-base-content">
          <div>
            <div className="text-2xl font-bold text-primary mb-4">Chatterly</div>
            <p>© 2024 Chatterly. All rights reserved.</p>
            <div className="flex gap-4 mt-4">
          <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
          <Link to="/terms" className="link link-hover">Terms of Service</Link>
          <Link to="/contact" className="link link-hover">Contact Us</Link>
            </div>
          </div>
        </footer>
          </div>
        );
};

export default Home;