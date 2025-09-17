'use client'
import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className='p-4 flex-1 flex gap-4 flex-col xl:flex-row'>
      {/* LEFT SIDE */}
      <div className='w-full xl:w-2/3'>
        <div className="h-full bg-white rounded-lg p-4">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        <Announcement />
      </div>
    </div>
  );
};

export default ParentPage;

