import React, { useState } from "react";

import Sidebar from "../../components/userDashbord/Sidebar";
import Dashboard from "../../components/userDashbord/Dashboard"
import Profile from "../../components/userDashbord/Profile";

const UserDashboard = () => {
  const [active, setActive] = useState("Dashboard");
  const [image, setImage] = useState(null);

  return (
    <>
      <div className="flex h-[89.8vvh]">
        {/*SideBar*/}

        <Sidebar active={active} setActive={setActive}  image={image}/>

        {/*Content*/}
        <div className="w-5/6 bg-gradient-to-t from-blue-200/80 to-sky-100/90  rounded-4xl shadow-3xl h-[89.7vh]">
          {active === "Dashboard" && <Dashboard />}
          {active === "Profile" && <Profile setImage={setImage}/>}
          {active === "My Jobs" && <div>My Job</div>}
          {active === "Messages" && <div>Message</div>}
          {active === "Membership" && <div>Membership</div>}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
