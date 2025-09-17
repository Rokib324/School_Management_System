'use client'
import React, { useState } from 'react'
import { Calendar } from 'react-calendar';
import { IoIosAdd, IoIosMore } from 'react-icons/io'
import 'react-calendar/dist/Calendar.css';


//Temporary events

const events = [
    {
        id: 1,
        title: "The Future of AI",
        time: "12:00am - 1:00pm",
        description: "You don’t need to be sold on the value of an event,or series of workshops.",
    },
    {
        id: 2,
        title: "Tomorrow's Tech",
        time: "1:00pm - 2:00pm",
        description: "This is a test description for event 2 that is longer than the other descriptions",
    },
    {
        id: 3,
        title: "Future's Education",
        time: "2:00pm - 3:00pm",
        description: "This is a test description for event 3 that is longer than the other descriptions",
    },
    {
        id: 4,
        title: "Fun with AI",
        time: "3:00pm - 4:00pm",
        description: "This is a test description for event 4 that is longer than the other descriptions",
    }
]


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white rounded-lg p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Event Calendar</h1>
        <span><IoIosMore /></span>
      </div>
      <div className='bg-white rounded-lg w-full h-[75%]'>
      <Calendar onChange={onChange} value={value} />
      {/* Events */}
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold my-4'>Events</h1>
        <span className='text-2xl cursor-pointer'><IoIosAdd /></span>
      </div>
      <div className='flex flex-col gap-4'>
        {events.map((event) => (
            <div key={event.id} className='bg-white rounded-md border-2 border-gray-200 border-t-4 odd:border-t-purple even:border-t-yellow p-5'>
                <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>{event.title}</h1>
                <p className='text-sm text-gray-500'>{event.time}</p>
                </div>
                <p className='text-sm text-gray-500 mt-2'>{event.description}</p>
            </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default EventCalendar 