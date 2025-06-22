import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { LuUserCog } from "react-icons/lu";
import { LuFileSpreadsheet } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = ({active, setActive}) => {
  const sidebarItems = [
    { id: 1, label: "Dashboard", icon: RxDashboard },
    { id: 2, label: "Profile", icon: LuUserCog },
    { id: 3, label: "My Jobs", icon: LuFileSpreadsheet },
    { id: 4, label: "Messages", icon: HiOutlineMail },
    { id: 5, label: "Membership", icon: MdOutlineWorkspacePremium },
  ];

  const handleLogout = () => {
    console.log("logout")
  }

  return (
    <>
      <div className="h-full w-1/6 py-4 px-3 flex flex-col justify-between">
        <div className="flex flex-col items gap-12 items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="border-3 border-black h-35 w-35 rounded-full"></div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">
              Aadi Jotwani
            </span>
          </div>

          <div className="flex flex-col w-full justify-center gap-2">
            {sidebarItems.map((item) => (
              <button
                className={`flex items-center gap-4 p-3 rounded-2xl font-semibold font-sans  hover:text-white transition-colors duration-300 ${
                  item.label === "Membership"
                    ? "hover:bg-pink-600"
                    : "hover:bg-blue-600"
                }
                ${
                  item.label === active
                    ? item.label === "Membership"
                      ? "bg-pink-600 text-white"
                      : "bg-blue-600 text-white"
                    : "text-[#1A3C5A]"
                }`}
                key={item.id}
                onClick={() => setActive(item.label)}
              >
                <span className="text-2xl">
                  <item.icon />
                </span>
                <span className="text-lg">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-4 p-3 rounded-2xl font-semibold font-sans text-[#1A3C5A] hover:bg-blue-600 hover:text-white transition-colors duration-300">
          <span className="">
            <TbLogout2 />
          </span>
          <span className="text-xl" onClick={handleLogout}>Log Out</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
