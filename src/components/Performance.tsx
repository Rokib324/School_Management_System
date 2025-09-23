'use client'
import React from 'react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { IoIosMore } from 'react-icons/io';

const data = [
  { name: 'Group A', value: 92, fill: '#8884d8' },
  { name: 'Group B', value: 8, fill: '#82ca9d' }
];
const Performance = () => {
  return (
    <div className='bg-white rounded-md p-4 h-80 relative'>
        <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Performance</h1>
        <span><IoIosMore /></span>
        </div>
        
    <ResponsiveContainer width="100%" height="100%">
    <PieChart>
        <Pie
          dataKey="value"
          nameKey="name"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          fill={data[0].fill}
          label={({ value }) => `${value}%`}
        />
      </PieChart>
    </ResponsiveContainer>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
    <h1 className='text-3xl font-bold'>9.2</h1>
    <span className='text-sm text-gray-300'>of 10 Max LTS</span>
    </div>
    <h2 className='text-center text-sm text-gray-600 absolute left-0 right-0 bottom-16 m-auto'>1st Semester - 2nd Semester</h2>
    </div>
  )
}

export default Performance