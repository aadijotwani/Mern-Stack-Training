import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Institute Portal
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12">
          Centralized Form Management System for Academic Use
        </p>

        {/* Action button */}
        <div className="flex justify-center">
          <Link
            to="/login"
            className="px-8 py-3 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 transition-colors"
          >
            Teacher Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
