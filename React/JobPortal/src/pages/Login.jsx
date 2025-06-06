import React from 'react'

const Login = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-pink-200 to-blue-200 w-screen h-[88.5vh] flex items-center justify-center' >
        <div className='h-[55%] w-[27%] bg-white/30 rounded-[40px] hover:shadow-gray-500 hover:shadow-xl hover:transition duration-1800 '>
          <h1 className='mt-2 ml-6 text-[45px] font-bold bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent'>Login</h1>

          <div className='ml-7'>
            <label htmlFor="UserID">User ID:</label>
            <input type="text" name="Userid" id="UserID" className='border-b w-[75%]'/>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Login