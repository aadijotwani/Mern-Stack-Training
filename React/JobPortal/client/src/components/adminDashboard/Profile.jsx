import { useState } from "react";
import React from "react";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import { MdPhonelinkRing } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { LuMailOpen } from "react-icons/lu";
import AboutMe from "./AboutMe";
import UserEditModels from "./Modals/UserEditModels";

const Profile = () => {
  const [details, setDetails] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const socialLinks = [
    { id: 1, name: "LinkedIn", url: details.linkedin, icons: linkedin },
    { id: 2, name: "GitHub", url: details.github, icons: github },
    { id: 3, name: "Twitter", url: details.twitter, icons: twitter },
    { id: 4, name: "Facebook", url: details.facebook, icons: facebook },
    { id: 5, name: "Instagram", url: details.instagram, icons: instagram },
  ];

  const personalDetails = [
    {
      id: 1,
      label: "Phone",
      value: details.phone || "N/A",
      icon: <MdPhonelinkRing />,
      bg: "bg-gradient-to-r from-green-400 to-emerald-500",
    },
    {
      id: 2,
      label: "Email",
      value: details.email || "N/A",
      icon: <LuMailOpen />,
      bg: "bg-gradient-to-r from-pink-400 to-orange-400",
    },
    {
      id: 3,
      label: "Address",
      value: details.address || "N/A",
      icon: <GrMapLocation />,
      bg: "bg-gradient-to-r from-sky-500 to-blue-400",
    },
  ];

  return (
    <>
      <div className="h-full w-full p-10 grid gap-6">
        <h1 className="font-sans font-bold text-4xl text-slate-800 underline decoration-pink-500 underline-offset-8">
          PROFILE
        </h1>

        <div className="w-full pb-4 grid md:flex gap-5 items-end">
          <div className="w-100 h-[60vh] flex flex-col items-center bg-white rounded-4xl shadow-3xl gap-4 mt-20 relative">
            <div className="w-50 h-50 rounded-4xl  overflow-hidden flex items-center justify-center absolute -top-20">
              <img
                src={details.photo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="pt-35 text-3xl font-bold font-sans">
              {details.firstName + " " + details.lastName}
            </h1>
            <span className="text-md text-slate-500">Frontend Developer</span>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((links) => (
                <button
                  className="shadow-md shadow-slate-400/50 bg-pink-100 h-11 w-11 rounded-lg"
                  key={links.id}
                >
                  <img src={links.icons} alt="" />
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              {personalDetails.map((personal) => (
                <div
                  className="w-[30vh] h-15 flex justify-start items-center gap-5 bg-blue-100/60 shadow-sm rounded-xl p-2"
                  key={personal.id}
                >
                  <div
                    className={` ${personal.bg} h-10 w-9.5 flex justify-center items-center rounded-lg`}
                  >
                    <h1 className="text-3xl text-white ">{personal.icon}</h1>
                  </div>

                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-md text-slate-600 font-semibold">
                      {personal.label}:
                    </h1>
                    <h1 className="leading-4 font-semibold text-lg">
                      {personal.value}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content of Profile */}

          <div className="w-full flex flex-col items-end gap-3">
            {/* Only show Edit Profile button */}
            <div className="flex gap-3 mb-2">
              <button
                className="px-4 py-2 rounded-lg font-semibold bg-pink-500 text-white"
                onClick={() => setIsEditModalOpen(true)}
              >
                Edit Profile
              </button>
            </div>

            <div className="w-full h-[60vh] flex flex-col bg-white rounded-4xl shadow-3xl gap-1  relative ">
              <AboutMe details={details} />
            </div>
          </div>
        </div>
      </div>
      <UserEditModels
        isOpen={isEditModalOpen}
        isClosed={() => setIsEditModalOpen(false)}
      />
    </>
  );
};

export default Profile;
                