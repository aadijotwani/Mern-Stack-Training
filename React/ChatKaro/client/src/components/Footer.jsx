import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-base-200 to-base-300 text-base-content relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-10 text-4xl">💭</div>
        <div className="absolute top-6 right-20 text-3xl">✨</div>
        <div className="absolute bottom-4 left-1/4 text-4xl">🎨</div>
        <div className="absolute top-3 left-1/2 text-2xl">⭐</div>
        <div className="absolute bottom-6 right-10 text-3xl">🚀</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-4">
        {/* Brand section */}
        <div className="text-center mb-4">
          <div className="flex justify-center items-center gap-3 mb-2">
            <div className="p-2 bg-primary/20 rounded-full">
              <span className="text-2xl">💬</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Chatterly
              </h2>
              <p className="text-xs opacity-75">
                Where conversations come to life ✨
              </p>
            </div>
          </div>
        </div>

        {/* Navigation and social links grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-sm mb-2 flex items-center justify-center gap-2">
              <span>📋</span> Quick Links
            </h3>
            <nav className="space-y-1">
              <Link
                to="/about"
                className="block link link-hover hover:link-primary transition-colors text-xs"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block link link-hover hover:link-primary transition-colors text-xs"
              >
                Contact
              </Link>
              <Link
                to="/privacy"
                className="block link link-hover hover:link-primary transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block link link-hover hover:link-primary transition-colors text-xs"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="text-center">
            <h3 className="font-semibold text-sm mb-2 flex items-center justify-center gap-2">
              <span>🌐</span> Connect
            </h3>
            <div className="flex justify-center gap-2">
              <a className="btn btn-circle btn-xs btn-outline hover:btn-primary">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a className="btn btn-circle btn-xs btn-outline hover:btn-primary">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a className="btn btn-circle btn-xs btn-outline hover:btn-primary">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a className="btn btn-circle btn-xs btn-outline hover:btn-primary">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.141.889 2.739.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.073-1.036 2.417-1.548 3.235 1.17.36 2.417.548 3.717.548 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="text-center">
            <h3 className="font-semibold text-sm mb-2 flex items-center justify-center gap-2">
              <span>⚡</span> Features
            </h3>
            <div className="space-y-1 text-xs opacity-80">
              <p className="flex items-center justify-center gap-2">
                <span>🔒</span> End-to-end Encryption
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>⚡</span> Real-time Messaging
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📱</span> Mobile Responsive
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>🎨</span> Beautiful UI/UX
              </p>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-base-100/50 rounded-full border border-base-content/20">
            <span className="text-xs">🛠️</span>
            <span className="text-xs font-medium">Built with</span>
            <div className="flex items-center gap-1">
              <span className="badge badge-primary badge-xs">React</span>
              <span className="badge badge-secondary badge-xs">DaisyUI</span>
              <span className="badge badge-accent badge-xs">TailwindCSS</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-2 border-t border-base-content/20">
          <p className="text-xs opacity-70 flex items-center justify-around">
            <span>Made with ❤️ by <a href="https://www.linkedin.com/in/aadi-jotwani" target="_blank" rel="noopener noreferrer">Aadi Jotwani</a>
</span>
            
            <div>
              <span>©</span>
              <span>2024 Chatterly. All rights reserved.</span>
            </div>
              
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
