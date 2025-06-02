import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-around py-3 bg-light align-items-center">
        <h1>My Portfolio</h1>
        <div>
          <ul className="list-unstyled d-flex gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Education</li>
            <li>Project</li>
            <li>Certification</li>
          </ul>
        </div>

        <div className="d-flex gap-4">
          <button className="btn btn-primary">Register</button>
          <button className="btn btn-outline-primary">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
