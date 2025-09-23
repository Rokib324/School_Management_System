import React from 'react'
import Image from 'next/image'
import { MdBloodtype, MdDateRange, MdPhone } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import { FaBook, FaBuilding } from 'react-icons/fa'
import { GrSchedule } from 'react-icons/gr'
import BigCalendar from '@/components/BigCalendar'
import Link from 'next/link'
import Announcement from '@/components/Announcement'
import Performance from '@/components/Performance'

const SingleStudentPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* LEFT SIDE */}
        <div className='w-full xl:w-2/3'>
        {/* TOP */}
        <div className='flex flex-col lg:flex-row gap-4'>
        {/* user Info Card */}
        <div className='bg-sky py-6 px-4 rounded-md flex-1 flex gap-4'>
            <div className='w-1/3'>
            <Image src={'https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200'} alt="user" width={144} height={144} className='w-36 h-36 rounded-full object-cover' />
            </div>
            <div className='w-2/3 flex flex-col justify-between gap-4'>
            <h1 className='text-xl font-semibold'>Md. Alia Akter</h1>
            <p className='text-sm text-gray-500'>An Engineering Teacher in Computer Science the University of London.</p>
            <div className='flex items-center justify-between gap-2 flex-wrap text-xs font font-medium'>
              <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
              <MdBloodtype />
              <span>B+</span>
              </div>
              <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
              <MdDateRange />
              <span>january2025</span>
              </div>
              <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
              <IoMdMail />
              <span>alia@gmail.com</span>
              </div>
              <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
              <MdPhone />
              <span>01712345678</span>
              </div>
            </div>
            </div>
        </div>
        {/* small cards */}
        <div className='flex-1 flex gap-4 justify-between flex-wrap'>
          {/* CARD */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
          <SlCalender />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <FaBuilding />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <FaBook />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <GrSchedule />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
        {/* RIGHT SIDE */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
            Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
              Student&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
              Student&apos;s Results
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Attendance
            </Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
            Student&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  )
}

export default SingleStudentPage