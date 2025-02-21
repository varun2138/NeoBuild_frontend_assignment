import React from "react";

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year.slice(-2)}`;
};
const Table = ({ bookings }) => {
  return (
    <table className="w-5/6 border-collapse">
      <thead>
        <tr className="border-b border-black">
          <th className="py-2 text-left">ID</th>
          <th className="py-2 text-left">Movie</th>
          <th className="py-2 text-left">Tickets</th>
          <th className="py-2 text-left">Amount</th>
          <th className="py-2 text-left">Time</th>
          <th className="py-2 text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking, index) => (
          <tr
            key={index}
            className="border-b border-black font-bold text-[#383838]"
          >
            <td className="py-2">{String(index + 1).padStart(2, "0")}</td>
            <td className="py-2">{booking.movie}</td>
            <td className="py-2">{booking.tickets}</td>
            <td className="py-2">$ {booking.totalAmount}:00</td>
            <td className="py-2">{booking.time}:00</td>
            <td className="py-2">{formatDate(booking.date)} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
