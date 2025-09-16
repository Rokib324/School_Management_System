'use client'
import React from 'react'
import { IoIosMore } from 'react-icons/io';
import { FaFemale, FaMale } from 'react-icons/fa';
import { RadialBarChart, RadialBar,ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Total',
    Count: 105,
    fill: 'white',
  },
  {
    name: 'Boys',
    Count: 53,
    fill: '#C3EBFA',
  },
  {
    name: 'Girls',
    Count: 52,
    fill: '#FAE27C',
  },
  
];




const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* Title */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Students</h1>
        <span><IoIosMore /></span>
      </div>
      {/* Top Charts */}
      <div className='w-full h-[75%] relative'>
      <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="Count"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="Female" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      {/* Bottom */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-sky rounded-full'/>
            <h1 className='font-bold'>1,234</h1>
            <h2 className='text-xs text-gray-500'>Boys(55%)</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-yellow rounded-full'/>
            <h1 className='font-bold'>1,000</h1>
            <h2 className='text-xs text-gray-500'>Boys(45%)</h2>
        </div>
      </div>
    </div>
  )
}

export default CountChart