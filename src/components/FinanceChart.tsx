'use client'
import React from 'react'
import { IoIosMore } from 'react-icons/io'
import { Line } from 'recharts';
import { CartesianGrid, Legend, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
    {
      name: 'Jan',
      Income: 125000,
      Expense: 98000,
      amt: 27000,
    },
    {
      name: 'Feb',
      Income: 118000,
      Expense: 102000,
      amt: 16000,
    },
    {
      name: 'Mar',
      Income: 135000,
      Expense: 95000,
      amt: 40000,
    },
    {
      name: 'Apr',
      Income: 142000,
      Expense: 108000,
      amt: 34000,
    },
    {
      name: 'May',
      Income: 128000,
      Expense: 105000,
      amt: 23000,
    },
    {
      name: 'Jun',
      Income: 115000,
      Expense: 92000,
      amt: 23000,
    },
    {
      name: 'Jul',
      Income: 85000,
      Expense: 75000,
      amt: 10000,
    },
    {
      name: 'Aug',
      Income: 95000,
      Expense: 88000,
      amt: 7000,
    },
    {
      name: 'Sep',
      Income: 145000,
      Expense: 112000,
      amt: 33000,
    },
    {
      name: 'Oct',
      Income: 138000,
      Expense: 106000,
      amt: 32000,
    },
    {
      name: 'Nov',
      Income: 132000,
      Expense: 98000,
      amt: 34000,
    },
    {
      name: 'Dec',
      Income: 148000,
      Expense: 115000,
      amt: 33000,
    },
  ];

const FinanceChart = () => {
  return (
        <div className='bg-white rounded-lg p-4 h-full'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Finance</h1>
        <span><IoIosMore /></span>
      </div>
      <ResponsiveContainer>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickMargin={10} />
        <YAxis tickMargin={10} />
        <Tooltip />
        <Legend align="center" verticalAlign="top" wrapperStyle={{ paddingTop: '20px', paddingBottom: '20px'}} />
        <Line type="monotone" dataKey="Income" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Expense" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
      </div>
  )
}

export default FinanceChart