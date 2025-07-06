import React from "react";

const AboutMe = ({ details }) => {
  return (
    <>
      <div className="h-full w-full rounded-4xl overflow-hidden">
        <div className="absolute top-0 left-0">
          <div className="flex items-center w-full">
            <span className="font-sans text-4xl pt-5 px-5 font-semibold">
              ABOUT ME{" "}
            </span>
            <div className="mt-6 w-90 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
          </div>
          <div>
            <p className="text-xl text-black p-5">
              {details.about
                ? details.about
                : "Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile frontend developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing short of exhilarating and I constantly strive to enhance my skills and embrace emerging trends in the industry."}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 h-[38.3vh] mb-0 relative top-49 ">
          <span className="font-sans text-4xl pt-5 px-5 font-semibold">
            What I Do!{" "}
          </span>
          <div className="px-6 h-full grid md:flex  gap-6">
            <div className="h-full w-full flex flex-col gap-6 pb-6">
              <div className="border w-full h-1/2 rounded-xl"></div>
              <div className="border w-full h-1/2 rounded-xl"></div>
            </div>

            <div className="h-full w-full flex flex-col gap-6 pb-6">
              <div className="border w-full h-1/2 rounded-xl"></div>
              <div className="border w-full h-1/2 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
