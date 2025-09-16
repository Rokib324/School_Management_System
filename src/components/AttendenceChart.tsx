'use client'

import React from 'react'
import { IoIosMore } from 'react-icons/io';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 86,
    absent: 30,
  },
  {
    name: 'Tue',
    present: 76,
    absent: 40,
  },
  {
    name: 'Wed',
    present: 98,
    absent: 18,
  },
  {
    name: 'Thu',
    present: 106,
    absent: 10,
  },
  {
    name: 'Fri',
    present: 96,
    absent: 20,
    
  }
];

const AttendenceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Attendence</h1>
        <span><IoIosMore /></span>
      </div>
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
        <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} />
        <YAxis axisLine={false} />
        <Tooltip />
        <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: '20px', paddingBottom: '20px'}} />
        <Bar dataKey="present" fill="#C3EBFA"  legendType="circle" radius={[10, 10, 0, 0]} />
        <Bar dataKey="absent" fill="#FAE27C" legendType="circle" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default AttendenceChart