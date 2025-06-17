import React from "react";

const Category = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 text-center ">
          <span className="text-[#ec275f] text-xl">FEATURED TOURS PACKAGES</span>
          <span className="text-6xl font-bold tracking-wider text-[#1A3C5A]">Browse Top Categories</span>
        </div>

        <div>
          <button className="w-[260px] h-[260px] border-2 border-amber-500 flaticon-report"></button>
        </div>
      </div>
    </>
  );
};

export default Category;
