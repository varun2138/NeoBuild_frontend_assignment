import React from "react";
import { SlGlobe } from "react-icons/sl";
import { BsFillTvFill } from "react-icons/bs";
import { RiDownloadLine } from "react-icons/ri";
const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="  w-3/12 h-full bg-black text-white py-8 flex   flex-col">
      <div className="flex justify-center items-center gap-3  ">
        <SlGlobe fontSize={30} />
        <p className="text-xl">Almanack</p>
      </div>

      <div className="buttons flex flex-col gap-4 mt-12 px-4 ">
        <div
          onClick={() => setActivePage("bookings")}
          className={` cursor-pointer p-2 rounded-lg flex items-center gap-2 font-bold ${
            activePage === "bookings"
              ? "bg-white  text-black  "
              : "  text-white"
          }`}
        >
          <BsFillTvFill />
          <p>Bookings</p>
        </div>
        <div
          onClick={() => setActivePage("activity")}
          className={` cursor-pointer p-2 rounded-lg flex items-center gap-2 font-bold ${
            activePage === "activity" ? "bg-white  text-black  " : "text-white"
          }`}
        >
          <RiDownloadLine />
          <p>Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
