import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import React from "react";
import AttendenceChart from "@/components/AttendenceChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
    {/* leftside */}
    <div className="w-full lg:w-2/3 flex flex-col gap-8">
    {/* UserCards */}
    <div className="flex justify-between gap-4 flex-wrap">
    <UserCard type="admin" />
    <UserCard type="teacher" />
    <UserCard type="student" />
    <UserCard type="Staff" />
    </div>
    {/* Charts */}
    {/* Middle Charts */}
    <div className="flex flex-col gap-4 lg:flex-row">
    {/* Count Charts */}
    <div className="w-full lg:w-1/3 h-[450px]">
    <CountChart />
    </div>
    {/* Attendance Chart */}
    <div className="w-full lg:w-2/3 h-[450px]">
    <AttendenceChart />
    </div>
    {/* Bottom Charts */}
    </div>
    </div>
    {/* rightside */}
    <div className="w-full lg:w-1/3">
    rightside
    </div>
    </div>
  );
};

export default AdminPage;
