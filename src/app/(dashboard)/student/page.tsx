'use client'
import Announcement from "@/components/Announcement";
import EventCalendar from "@/components/EventCalendar";
import BigCalendar from "@/components/BigCalendar";
import React from "react";

const StudentPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      {/* LEFT SIDE */}
      <div className='w-full xl:w-2/3'>
        <div className="h-full bg-white rounded-lg p-4">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
