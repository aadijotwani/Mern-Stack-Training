import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 shadow-md sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <img
                    src="/logo.png"
                    alt="MUJ Posters"
                    className="h-10 w-10 rounded-full shadow"
                />
                <span className="font-extrabold text-2xl tracking-wide text-gray-900">
                    MUJ Posters
                </span>
            </div>
            <div className="flex gap-8 items-center">
                <a
                    href="/"
                    className="relative text-gray-900 font-medium hover:text-blue-600 transition duration-200 after:content-[''] after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                >
                    Home
                </a>
                <a
                    href="#posters"
                    className="relative text-gray-900 font-medium hover:text-blue-600 transition duration-200 after:content-[''] after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                >
                    Posters
                </a>
                <a
                    href="#buy"
                    className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition duration-200"
                >
                    Contact Us
                </a>
            </div>
        </nav>
    );
};

export default Navbar;