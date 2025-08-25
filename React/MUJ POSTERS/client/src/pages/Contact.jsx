import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp message with form data
    const whatsappMessage = `Hi! I'm ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;
    
    const phoneNumber = "919407293582";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
            Have questions about our posters? We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                We're here to help you create amazing posters for your hostel room. 
                Reach out to us through any of the following ways:
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg shadow-lg hover:bg-gray-800/70 transition-colors">
                <div className="bg-purple-500/20 p-2 sm:p-3 rounded-full border border-purple-500/30 flex-shrink-0">
                  <FaPhone className="text-purple-400 text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Phone</h3>
                  <p className="text-gray-300 text-sm sm:text-base">+91 94072 93582</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg shadow-lg hover:bg-gray-800/70 transition-colors">
                <div className="bg-cyan-500/20 p-2 sm:p-3 rounded-full border border-cyan-500/30 flex-shrink-0">
                  <FaMapMarkerAlt className="text-cyan-400 text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Manipal University Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/919407293582?text=Hi! I have a question about MUJ Posters. Can you help me?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors shadow-lg hover:shadow-green-500/50"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none placeholder-gray-400"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">How do I place an order?</h3>
              <p className="text-gray-300">
                Simply browse our poster collection, select your favorites, choose quantity and hostel block, 
                then contact us directly via WhatsApp.
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept various payment methods including UPI, bank transfer, and cash on delivery 
                for hostel deliveries.
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">How long does delivery take?</h3>
              <p className="text-gray-300">
                For hostel deliveries within MUJ campus, we typically deliver within 24-48 hours 
                after order confirmation.
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Can I customize poster designs?</h3>
              <p className="text-gray-300">
                Yes! Contact us with your specific requirements and we'll work with you to create 
                custom poster designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
