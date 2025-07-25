import React, { useState } from "react";

import Sidebar from "../../components/recruiterDashboard/Sidebar";
import Dashboard from "../../components/recruiterDashboard/Dashboard"
import Profile from "../../components/recruiterDashboard/Profile";

const RecruiterDashboard = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      <div className="flex h-[89.8vvh]">
        {/*SideBar*/}

        <Sidebar active={active} setActive={setActive} />

        {/*Content*/} 
        <div className="w-5/6 bg-gradient-to-t from-blue-200/80 to-sky-100/90  rounded-4xl shadow-3xl h-[89.7vh]">
          {active === "Dashboard" && <Dashboard />}
          {active === "Profile" && <Profile/>}
          {active === "My Jobs" && <div>My Job</div>}
          {active === "Messages" && <div>Message</div>}
          {active === "Membership" && <div>Membership</div>}
        </div>
      </div>
    </>
  );
};

export default RecruiterDashboard;
