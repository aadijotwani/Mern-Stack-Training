import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/api";
import toast from "react-hot-toast";
import { RxDashboard } from "react-icons/rx";
import { LuUserCog } from "react-icons/lu";
import { LuFileSpreadsheet } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = ({ active, setActive, image }) => {
  const navigate = useNavigate();
  const sidebarItems = [
    { id: 1, label: "Dashboard", icon: RxDashboard, color: "text-blue-600" },
    { id: 2, label: "Profile", icon: LuUserCog, color: "text-pink-600" },
    {
      id: 3,
      label: "My Jobs",
      icon: LuFileSpreadsheet,
      color: "text-green-600",
    },
    { id: 4, label: "Messages", icon: HiOutlineMail, color: "text-yellow-500" },
    {
      id: 5,
      label: "Membership",
      icon: MdOutlineWorkspacePremium,
      color: "text-purple-600",
    },
  ];

  const [PersonDetail, setPersonDetail] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const handleLogout = () => {
    toast.promise(
      axios.get("/auth/logout").then((res) => {
        sessionStorage.removeItem("user"), navigate("/login");
        return res;
      }),
      {
        loading: "Logging out...",
        success: (res) => res.data.message,
        error: (err) => err.response.data.message || "Something went wrong!",
      }
    );
  };

  useEffect(() => {
    setPersonDetail(JSON.parse(sessionStorage.getItem("user")));
  }, [image]);

  //blue-600",
  //Profile: "text-pink-600",
  // "My Jobs": "text-green-600",
  // Messages: "text-yellow-500",
  //  Membership: "text-purple-600
  //console.log(PersonDetail);
  return (
    <>
      <div className="h-[89.7vh] w-1/6 py-4 px-3 flex flex-col justify-between ">
        <div className="flex flex-col items gap-12 items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="shadow-sm shadow-black/30 h-45 w-45 rounded-full overflow-hidden">
              <img
                src={PersonDetail.photo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">
              {PersonDetail.firstName + " " + PersonDetail.lastName}
            </span>
          </div>

          <div className="flex flex-col w-full justify-center gap-2">
            {sidebarItems.map((item) => (
              <button
                className={`group flex items-center gap-4 p-3 rounded-2xl font-semibold font-sans hover:text-white transition-colors duration-300 ${
                  item.label === "Membership"
                    ? "hover:bg-pink-600 "
                    : "hover:bg-blue-600 "
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
                <span
                  className={`text-2xl ${
                    item.label !== active ? item.color : "text-white"
                  } group-hover:text-white transition-colors duration-300`}
                >
                  <item.icon />
                </span>
                <span className="text-lg">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="flex items-end gap-4 p-3 rounded-2xl font-semibold font-sans text-red-600 hover:bg-red-600 hover:text-white active:bg-red-300 active:text-black active:shadow-2xl transition-colors duration-300">
          <span className="text-2xl">
            <TbLogout2 />
          </span>
          <span className="text-xl" onClick={handleLogout}>
            Log Out
          </span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
