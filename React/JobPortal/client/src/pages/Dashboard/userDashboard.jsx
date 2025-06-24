import React, { Profiler, useState } from "react";

import Sidebar from "../../components/userDashbord/Sidebar";
import Dashboard from "../../components/userDashbord/dashboard";
import Profile from "../../components/userDashbord/Profile";

const userDashboard = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      <div className="flex h-[89.8vvh]">
        {/*SideBar*/}

        <Sidebar active={active} setActive={setActive} />

        {/*Content*/}
        <div className="w-5/6 bg-blue-100/80 rounded-4xl shadow-3xl h-[89.7vh]">
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

export default userDashboard;
