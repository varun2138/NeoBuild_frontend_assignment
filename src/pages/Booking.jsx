import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Activity from "../components/Activity";
import BookingComponent from "../components/BookingPage";
import Sidebar from "../components/Sidebar";
import { useGlobal } from "../context/Context";
const Booking = () => {
  const [activePage, setActivePage] = useState("bookings");
  const { user, logout } = useGlobal();

  return (
    <div className="w-full h-screen p-4 flex gap-2 ">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div
        onClick={() => logout()}
        className=" cursor-pointer absolute right-8 flex items-center gap-3"
      >
        <div className="  h-12 w-12 flex justify-center items-center  bg-[#d9d9d9] rounded-full">
          <FaUserCircle fontSize={30} />
        </div>
        <p className="text-lg font-bold capitalize ">
          {user.username.split(".").join(" ")}
        </p>
      </div>
      <div className=" pl-6 w-full h-full">
        {activePage === "bookings" ? (
          <BookingComponent setActivePage={setActivePage} />
        ) : (
          <Activity />
        )}
      </div>
    </div>
  );
};

export default Booking;
