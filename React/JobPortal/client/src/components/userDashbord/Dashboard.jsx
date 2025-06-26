import React from "react";
import { LuUserRoundSearch } from "react-icons/lu";
import { BiBookmarkAlt } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import { RiCalendarScheduleLine } from "react-icons/ri";

const Dashboard = () => {
  const InfoBar = [
    { id: 1, label: "Total Jobs", iconPack: LuUserRoundSearch, no: "05" },
    { id: 2, label: "Shortlisted Jobs", iconPack: BiBookmarkAlt , no: "07" },
    { id: 3, label: "Total Applications", iconPack: TiDocumentText , no: "10"},
    { id: 4, label: "Interview Scheduled", iconPack: RiCalendarScheduleLine , no: "02"},
  ];

  return (
    <>
      <div className="h-full w-full p-10">
        <h1 className="font-sans font-bold text-4xl text-slate-800 underline decoration-pink-500 underline-offset-8">
          DASHBOARD
        </h1>

        <div className="flex flex-col">
          <div className="py-15 flex justify-between p-10 gap-5">
            {InfoBar.map((item) => (
              <div className="w-1/4 h-30 shadow-2xl bg-white rounded-[39px] flex justify-between items-center gap-5 px-6" key={item.id}>
                <div className="flex flex-col">
                  <h1 className="text-5xl font-bold">{item.no}</h1>
                  <h1 className="text-sm font-sans font-semibold text-slate-500 py-1">
                    {item.label}
                  </h1>
                </div>
                <div className="rounded-full h-15 w-15 bg-gradient-to-r from-sky-500 to-blue-700 bg-sky-600 flex items-center justify-center text-2xl text-white ">
                  <item.iconPack />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-25 px-10">
            <div className="rounded-[39px] w-2/3 h-110 bg-white shadow-2xl"></div>
            <div className="rounded-[39px] w-1/3 h-110 bg-white shadow-2xl">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
