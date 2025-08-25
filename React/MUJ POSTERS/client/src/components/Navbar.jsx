import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Cart from "./CartDrawer";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  const isFirstLoad = React.useRef(true);

  // Monitor scroll position to update active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") return;

      // Calculate scroll progress
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Update active section based on scroll position
      const collectionSection = document.getElementById("collection-section");
      const postersSection = document.getElementById("posters-section");

      if (postersSection && collectionSection) {
        const collectionRect = collectionSection.getBoundingClientRect();
        const postersRect = postersSection.getBoundingClientRect();

        // Check which section is in view (considering navbar offset)
        if (postersRect.top <= 100 && postersRect.bottom > 100) {
          setActiveSection("posters");
        } else if (collectionRect.top <= 100 && collectionRect.bottom > 100) {
          setActiveSection("collection");
        } else {
          setActiveSection("home");
        }
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      if (!isFirstLoad.current) {
        handleScroll();
      } // Check initial position
    } else {
      setActiveSection(""); // No active section on other pages
      setScrollProgress(0);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Use setTimeout to wait for navigation to complete
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Calculate offset for sticky navbar (approximately 80px height)
          const navbarOffset = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else if (sectionId === "home") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      if (sectionId === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          // Calculate offset for sticky navbar (approximately 80px height)
          const navbarOffset = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <>
      {/* Navbar - Always stays on top with high z-index */}
      <nav
        className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-black/95 backdrop-blur-sm border-b border-gray-700 shadow-lg sticky top-0"
        style={{ zIndex: 9999 }}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="/logo.png"
            alt="MUJ Posters"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full shadow-lg shadow-purple-500/30 animate-pulse"
          />
          <span className="font-extrabold text-lg sm:text-xl lg:text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            MUJ Posters
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection("home")}
            className={`relative font-medium transition-all duration-300 cursor-pointer group ${
              activeSection === "home"
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
          >
            Home
            <span
              className={`absolute bottom-[-4px] left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${
                activeSection === "home" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>

          <button
            onClick={() => scrollToSection("collection-section")}
            className={`relative font-medium transition-all duration-300 cursor-pointer group ${
              activeSection === "collection"
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
          >
            Collection
            <span
              className={`absolute bottom-[-4px] left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${
                activeSection === "collection"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>

          <button
            onClick={() => scrollToSection("posters-section")}
            className={`relative font-medium transition-all duration-300 cursor-pointer group ${
              activeSection === "posters"
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
          >
            Posters
            <span
              className={`absolute bottom-[-4px] left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${
                activeSection === "posters"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            title="Shopping Cart"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h11"
              />
            </svg>
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                {getCartItemsCount()}
              </span>
            )}
          </button>

          <Link
            to="/contact"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation - Cart + Menu Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 sm:p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            title="Shopping Cart"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h11"
              />
            </svg>
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold text-[10px] sm:text-xs animate-pulse">
                {getCartItemsCount()}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 sm:p-3 text-white hover:text-purple-400 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-[72px] left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col py-6 px-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-left py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === "home"
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
                }`}
              >
                🏠 Home
              </button>

              <button
                onClick={() => scrollToSection("collection-section")}
                className={`text-left py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === "collection"
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
                }`}
              >
                🎨 Collection
              </button>

              <button
                onClick={() => scrollToSection("posters-section")}
                className={`text-left py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === "posters"
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
                }`}
              >
                🖼️ Posters
              </button>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 text-center"
              >
                📞 Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar - Just below navbar */}
      {location.pathname === "/" && (
        <div
          className="fixed top-[72px] left-0 w-full h-1 bg-gray-800/50"
          style={{ zIndex: 9998 }}
        >
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      )}

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
