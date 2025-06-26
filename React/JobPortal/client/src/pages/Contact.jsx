import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200/60 to-sky-200/50">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">We would love to hear from you!</p>
        <form className="w-full max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 mb-4 border rounded"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact