import React from "react";
import { useGlobal } from "../context/Context";
import Table from "./Table";
const Activity = () => {
  const { bookings } = useGlobal();
  return (
    <div className="mt-8 flex flex-col gap-6">
      <h1 className="text-xl font-semibold">Activity</h1>
      <Table bookings={bookings} />
    </div>
  );
};

export default Activity;
