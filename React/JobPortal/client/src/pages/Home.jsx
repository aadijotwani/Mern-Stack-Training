import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-45">
        <Hero />
        <Category />
      </div>
    </>
  );
};

export default Home;