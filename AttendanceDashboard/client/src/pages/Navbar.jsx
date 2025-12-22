import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className='bg-white shadow-md fixed w-full z-10 border-b-2 border-[#7B2D26]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          <div className='flex items-center space-x-3'>
            <img 
              src='/logo.png' 
              alt='Raj Vedanta School' 
              className='h-16 w-auto'
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className='h-16 w-16 bg-[#7B2D26] rounded-lg items-center justify-center' style={{display: 'none'}}>
              <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
              </svg>
            </div>
            <div>
              <div className='text-xl font-bold text-[#7B2D26]'>
                Raj Vedanta School
              </div>
              <div className='text-xs text-gray-600'>Attendance Management System</div>
            </div>
          </div>

          <button 
            onClick={() => navigate('/login')}
            className='bg-[#7B2D26] hover:bg-[#5A1F1A] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold'
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar