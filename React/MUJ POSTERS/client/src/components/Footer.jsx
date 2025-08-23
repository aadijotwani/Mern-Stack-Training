import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaHeart, FaStar } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#f9fafb] via-blue-50 to-teal-50 pt-16 pb-8 mt-20">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">🎨</span>
                            </div>
                            <span className="font-extrabold text-2xl tracking-wide text-gray-900">
                                MUJ Posters
                            </span>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Your go-to destination for creative, high-quality posters. Making campus life more colorful, one poster at a time! 
                        </p>
                        <div className="flex items-center gap-2 text-[#38bdf8]">
                            <FaStar className="text-yellow-500" />
                            <span className="font-semibold">4.9/5 Customer Rating</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#0ea5e9] mb-6 flex items-center gap-2">
                            <span className="text-2xl">🔗</span> Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'All Posters', href: '#posters' },
                                { name: 'Custom Orders', href: '#custom' },
                                { name: 'Bulk Orders', href: '#bulk' },
                                { name: 'Gallery', href: '#gallery' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        className="text-gray-700 hover:text-[#38bdf8] hover:pl-2 transition-all duration-300 font-medium text-lg block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#0ea5e9] mb-6 flex items-center gap-2">
                            <span className="text-2xl">⚡</span> Our Services
                        </h3>
                        <div className="space-y-4">
                            {[
                                { icon: '🚚', text: 'Fast Campus Delivery' },
                                { icon: '🎨', text: 'Custom Design Service' },
                                { icon: '📦', text: 'Bulk Order Discounts' },
                                { icon: '💫', text: 'Premium Quality Print' }
                            ].map((service, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-700">
                                    <span className="text-xl">{service.icon}</span>
                                    <span className="font-medium text-lg">{service.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#0ea5e9] mb-6 flex items-center gap-2">
                            <span className="text-2xl">📞</span> Get In Touch
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-700">
                                <FaMapMarkerAlt className="text-[#38bdf8] text-xl" />
                                <span className="font-medium text-lg">Manipal University Jaipur</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <FaEnvelope className="text-[#38bdf8] text-xl" />
                                <span className="font-medium text-lg">mujposters@gmail.com</span>
                            </div>
                            
                            {/* Social Links */}
                            <div className="pt-4">
                                <p className="text-gray-700 font-medium text-lg mb-3">Follow Us:</p>
                                <div className="flex gap-4">
                                    <a 
                                        href="https://wa.me/91XXXXXXXXXX" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white p-3 rounded-2xl shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
                                    >
                                        <FaWhatsapp size={24} />
                                    </a>
                                    <a 
                                        href="https://instagram.com/mujposters" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-2xl shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
                                    >
                                        <FaInstagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="bg-white/95 rounded-3xl shadow-2xl p-8 mb-12 border border-[#38bdf8]/20">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-[#0ea5e9] mb-4 flex items-center justify-center gap-3">
                            <span className="text-4xl">✨</span>
                            Ready to Order Your Poster?
                        </h3>
                        <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
                            Join hundreds of satisfied customers! Get your custom poster delivered right to your hostel or classroom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/91XXXXXXXXXX?text=Hi! I want to order a custom poster."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white rounded-2xl font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-3"
                            >
                                <FaWhatsapp size={20} />
                                Order via WhatsApp
                            </a>
                            <a
                                href="mailto:mujposters@gmail.com"
                                className="px-8 py-3 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white rounded-2xl font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-3"
                            >
                                <FaEnvelope size={20} />
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-600">
                            <span className="text-lg">Made with</span>
                            <FaHeart className="text-red-500 animate-pulse" />
                            <span className="text-lg">for MUJ students</span>
                        </div>
                        
                        <div className="text-center">
                            <p className="text-gray-600 text-lg">
                                © 2024 MUJ Posters. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                                Bringing creativity to campus life ✨
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <a href="#privacy" className="hover:text-[#38bdf8] transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <span>•</span>
                            <a href="#terms" className="hover:text-[#38bdf8] transition-colors duration-300">
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