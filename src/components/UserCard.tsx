import React from 'react'
import { IoIosMore } from 'react-icons/io'

const UserCard = ({type}: {type: string}) => {
  return (
    <div className='rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1'>
        <div className='flex justify-between items-center'>
            <span className='text-[10px] text-green-600 bg-white px-2 py-1 rounded-full'>2025/2026</span>
            <span className='text-white text-2xl font-bold cursor-pointer'><IoIosMore /></span>
        </div>
        <h1 className='text-2xl font-bold my-4'>1,234</h1>
        <h2 className='capitalize text-gray-500 text-sm font-medium'>{type}s</h2>
    </div>
  )
}

export default UserCard