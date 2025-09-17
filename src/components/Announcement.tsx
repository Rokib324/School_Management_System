'use client'
import React from 'react'
import { IoIosAdd, IoIosMore } from 'react-icons/io'

const announcements = [
    {
        id: 1,
        title: "Announcement 1",
        date: "2025-01-01",
        description: "This is a test description for announcement 1",
    },
    {
        id: 2,
        title: "Announcement 2",
        date: "2025-01-02",
        description: "This is a test description for announcement 2",
    },
    
    {
        id: 3,
        title: "Announcement 3",
        date: "2025-01-03",
        description: "This is a test description for announcement 3",
    },
    
    {
        id: 4,
        title: "Announcement 4",
        date: "2025-01-04",
        description: "This is a test description for announcement 4",
    }
]

const Announcement = () => {
  return (
    <div className='bg-white rounded-lg p-4'>
        <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold my-4'>Announcements</h1>
        <span className='text-sm text-gray-500 cursor-pointer'>View All</span>
      </div>
      <div className='flex flex-col gap-4'>
        {announcements.map((announcement) => (
            <div key={announcement.id} className='bg-white rounded-md odd:bg-purple/20 even:bg-yellow/20 p-5'>
                <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>{announcement.title}</h1>
                <p className='text-xs text-gray-500 rounded-lg px-2 py-1 bg-gray-100'>{announcement.date}</p>
                </div>
                <p className='text-sm text-gray-500 mt-2'>{announcement.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Announcement