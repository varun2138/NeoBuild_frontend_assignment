import React, { useState, useEffect } from "react";

import { useGlobal } from "../context/Context";
import { toast } from "react-toastify";
import Details from "./Details";

const Selection = ({ movie, setActivePage }) => {
  const { bookings, setBookings } = useGlobal();

  const [time, setTime] = useState("12");
  const [ticketCount, setTicketCount] = useState(1);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  const ticketPrice = 25;
  const totalAmount = ticketCount * ticketPrice;

  const handleTicketCount = (inc) => {
    setTicketCount((prev) => Math.max(1, prev + inc));
  };

  const handleBookTickets = () => {
    if (!date) {
      alert("Please select a date!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const newBooking = {
        movie: movie.name,
        image: movie.image,
        tickets: ticketCount,
        time,
        date,
        totalAmount,
      };

      setBookings([...bookings, newBooking]);
      toast.success("Tickets booked successfully!");

      setLoading(false);
      setActivePage("activity");
    }, 3000);
  };

  return (
    <div className=" ">
      <div className="flex flex-col gap-4">
        <img
          src={movie.image}
          alt=""
          className="w-4/6 h-60 2xl:h-80 object-cover rounded-md"
        />
        <p className="text-2xl font-bold  ">
          {movie.name} ({movie.year})
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-6 ">
        <Details
          setDate={setDate}
          setTime={setTime}
          time={time}
          date={date}
          handleTicketCount={handleTicketCount}
          ticketCount={ticketCount}
        />
        <button
          disabled={loading}
          onClick={handleBookTickets}
          className="bg-black text-white px-6 py-2 rounded-md font-bold mt-4 w-1/3  "
        >
          {loading ? "booking..." : "Book Tickets"}
        </button>
      </div>
    </div>
  );
};

export default Selection;
