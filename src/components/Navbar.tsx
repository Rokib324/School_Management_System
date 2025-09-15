import React from 'react'
import {  FaRegUser, FaSearch } from 'react-icons/fa'
import { GrAnnounce } from 'react-icons/gr'
import { LuMessageCircleMore } from 'react-icons/lu'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/*searchbar */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <span><FaSearch /></span>
        <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none' />
      </div>
      {/* ICONS and User */}
      <div className='flex items-center gap-6 justify-end w-full md:w-auto'>
        <div className='flex items-center justify-center bg-white rounded-full w-7 h-7 cursor-pointer'>
          <span><LuMessageCircleMore /></span>
        </div>
        <div className='relative flex items-center justify-center bg-white rounded-full w-7 h-7 cursor-pointer'>
          <span><GrAnnounce /></span>
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-white text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm font-medium leading-3'>John Doe</span>
          <span className='text-xs text-gray-500 text-right'>Admin</span>
        </div>
        <div className='flex items-center justify-center bg-blue-600 rounded-full w-7 h-7 cursor-pointer'>
          <span className='text-white'><FaRegUser /></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar