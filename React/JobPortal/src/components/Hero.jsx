import React from "react";

const Hero = () => {
  return (
    <>
      <div className='bg-[url("hero.png")] w-full h-[90vh] bg-center bg-no-repeat flex-col relative'>
        <div className="absolute w-1/2 h-full flex flex-col justify-center items-start gap-10 left-2/12 top-0">
          <span className="text-8xl text-blue-950 font-extrabold leading-25">
            Find the <br /> most excitng <br />startup jobs
          </span>

          <div className="w-[85%] flex justify-between bg-white ">
            <div>
              <label htmlFor="keyword"></label>
            <input
              type="text"
              name="Job Tittle or Keyword"
              id="keyword"
              placeholder="Job Tittle or Keyword"
              className="text-gray-700 p-5 w-75 focus:outline-none focus:ring-0"
            />
            <span className="text-3xl text-gray-400">|</span>
            <select name="Location" className="p-5 w-55 focus:outline-none focus:ring-0 border-s-1 ">
              <option value="1">Location BD</option>
              <option value="2">Location PK</option>
              <option value="3">Location US</option>
              <option value="4">Location UK</option>
            </select>
            </div>

            <button className="bg-[#F54677] w-35 p-5 ">Find Job</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
