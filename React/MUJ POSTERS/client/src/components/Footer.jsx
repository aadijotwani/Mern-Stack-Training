import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaHeart, FaStar, FaPhone, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            navigate('/');
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100);
        }
    };

    const handlePostersClick = () => {
        if (location.pathname === '/') {
            const postersSection = document.getElementById('posters-section');
            if (postersSection) {
                const elementPosition = postersSection.offsetTop;
                const offsetPosition = elementPosition - 80;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const postersSection = document.getElementById('posters-section');
                if (postersSection) {
                    const elementPosition = postersSection.offsetTop;
                    const offsetPosition = elementPosition - 80;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-12 sm:pt-16 pb-6 sm:pb-8 mt-16 sm:mt-20 border-t border-gray-700">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Company Info */}
                    <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <img
                                src="/logo.png"
                                alt="MUJ Posters"
                                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full shadow-lg shadow-purple-500/30"
                            />
                            <span className="font-extrabold text-lg sm:text-xl lg:text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                MUJ Posters
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Your go-to destination for creative, high-quality posters. Making campus life more colorful, one poster at a time! 
                        </p>
                        <div className="flex items-center gap-2 text-purple-400">
                            <FaStar className="text-yellow-400 text-sm sm:text-base" />
                            <span className="font-medium text-xs sm:text-sm">Trusted by MUJ Students</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-1.5 sm:space-y-2">
                            <li>
                                <button 
                                    onClick={handleHomeClick}
                                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium text-xs sm:text-sm"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={handlePostersClick}
                                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium text-xs sm:text-sm"
                                >
                                    All Posters
                                </button>
                            </li>
                            <li>
                                <Link 
                                    to="/contact"
                                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium text-xs sm:text-sm"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="https://wa.me/919407293582"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium text-xs sm:text-sm"
                                >
                                    Custom Orders
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                            Our Services
                        </h3>
                        <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="text-purple-400 text-sm">🚚</span>
                                <span className="font-medium text-xs sm:text-sm">Fast Campus Delivery</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="text-purple-400 text-sm">🎨</span>
                                <span className="font-medium text-xs sm:text-sm">Custom Design Service</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="text-purple-400 text-sm">📦</span>
                                <span className="font-medium text-xs sm:text-sm">Bulk Order Discounts</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="text-purple-400 text-sm">💫</span>
                                <span className="font-medium text-xs sm:text-sm">Premium Quality Print</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white mb-4">
                            Get In Touch
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <FaMapMarkerAlt className="text-purple-400 text-base flex-shrink-0" />
                                <span className="font-medium text-sm">Manipal University Jaipur</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <FaPhone className="text-purple-400 text-base flex-shrink-0" />
                                <span className="font-medium text-sm">+91 94072 93582</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <FaEnvelope className="text-purple-400 text-base flex-shrink-0" />
                                <span className="font-medium text-sm">support@mujposters.com</span>
                            </div>
                            
                            {/* Social Links */}
                            <div className="pt-2">
                                <p className="text-gray-300 font-medium text-sm mb-3">Follow Us:</p>
                                <div className="flex gap-3">
                                    <a 
                                        href="https://wa.me/919407293582" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-200"
                                    >
                                        <FaWhatsapp size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl shadow-2xl shadow-purple-500/30 p-8 mb-8 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-3">
                            Ready to Order Your Poster?
                        </h3>
                        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                            Join hundreds of satisfied students! Get your custom poster delivered right to your hostel room.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/919407293582?text=Hi! I want to order a custom poster."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
                            >
                                <FaWhatsapp size={18} />
                                Order via WhatsApp
                            </a>
                            <Link
                                to="/contact"
                                className="px-6 py-3 bg-gray-800/50 backdrop-blur-md border border-gray-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-gray-700/50 transition-all duration-200 flex items-center gap-2"
                            >
                                <FaEnvelope size={18} />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Web Development Services CTA - Compact */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg shadow-gray-500/10 p-4 mb-6 text-white border border-gray-600">
                    <div className="text-center">
                        <h4 className="text-lg font-bold mb-2">
                            Need a Website Like This?
                        </h4>
                        <p className="text-xs opacity-80 mb-3">
                            Professional web development services by the same Developer
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <a
                                href="https://wa.me/919407293582?text=Hi! I'm interested to build a Website."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                            >
                                <FaWhatsapp size={14} />
                                Get Your Website
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aadi-jotwani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn Portfolio
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-300 ">
                            <span className="text-lg">Made with</span>
                            <FaHeart className="text-red-400 animate-pulse text-lg" />
                            <span className="text-sm">by <a href="https://www.linkedin.com/in/aadi-jotwani"><b className='font-extrabold text-lg bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent hover:text-white'>Aadi Jotwani</b></a></span>
                        </div>
                        
                        <div className="text-center">
                            <p className="text-gray-300 text-sm">
                                © 2024 MUJ Posters. All rights reserved.
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                                Bringing creativity to campus life ✨
                            </p>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-400">
                            <a href="#privacy" className="hover:text-purple-400 transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <span>•</span>
                            <a href="#terms" className="hover:text-purple-400 transition-colors duration-200">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;