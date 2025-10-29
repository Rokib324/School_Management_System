import React from "react";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className='text-2xl font-bold'>Home</h1>
      <h1 className='text-lg text-gray-500 font-semibold'>Need to do more work on the project for making it dynamic with real data.</h1>
      <h1> visit <a href="http://localhost:3000/admin" className='text-blue-500'>http://localhost:3000/admin</a> to see the admin dashboard</h1>
    </div>
  );
}
