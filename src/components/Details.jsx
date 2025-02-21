import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
const Details = ({
  handleTicketCount,
  ticketCount,
  setTime,
  setDate,
  time,
  date,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-16">
        <p className="font-bold text-lg">Ticket Count</p>
        <div className="flex items-center  gap-2">
          <button onClick={() => handleTicketCount(-1)}>
            <TiMinus className="text-xl cursor-pointer" />
          </button>

          <p className="text-lg font-bold bg-black px-2.5 py-0 text-white rounded-md">
            {ticketCount}
          </p>
          <button onClick={() => handleTicketCount(1)}>
            <FaPlus className="text-xl cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-16">
        <p className="font-bold text-lg">Show time</p>
        <div className="flex items-center gap-4">
          <div
            onClick={() => setTime("9")}
            className={`py-1.5 px-4 flex items-center gap-2 rounded-md font-bold cursor-pointer ${
              time === "9" ? "bg-black text-white" : "bg-[#d9d9d9]"
            }`}
          >
            <IoSunnyOutline fontSize={20} />
            <p>9:00</p>
          </div>

          <div
            onClick={() => setTime("12")}
            className={`py-1.5 px-4 flex items-center gap-2 rounded-md font-bold cursor-pointer ${
              time === "12" ? "bg-black text-white" : "bg-[#d9d9d9]"
            }`}
          >
            <BsGlobe2 fontSize={20} />
            <p>12:00</p>
          </div>

          <div
            onClick={() => setTime("18")}
            className={`py-1.5 px-4 flex items-center gap-2 rounded-md font-bold cursor-pointer ${
              time === "18" ? "bg-black text-white" : "bg-[#d9d9d9]"
            }`}
          >
            <IoMoonOutline fontSize={20} />
            <p>18:00</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-16">
        <p className="font-bold text-lg">Select Date</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className=" cursor-pointer border p-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default Details;
