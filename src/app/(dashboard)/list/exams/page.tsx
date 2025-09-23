'use client'
import TableSearch from '@/components/TableSearch'
import React from 'react'
import { FaEdit, FaEye, FaPlus, FaSortAmountDown, FaTrash } from 'react-icons/fa'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { examsData, role } from '@/lib/data'
import Link from 'next/link'
import FormModal from '@/components/FormModal'

type Exam = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    date: string;
}; 

const columns = [
  {
    header: "Subject Name",
    accessor: "info",
  },

  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const ExamsListPage = () => {
  const renderRow = (item: Exam) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-[#F7F4EA] odd:bg-[#F3F2EC] text-sm hover:bg-amber-50"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>  {/* edit and delete */}
            <FormModal table="exam" type="update" id={item.id} />
            {/* <Link href={`/list/exams/${item.id}`} className='flex items-center justify-center rounded-full bg-gray-300 w-8 h-8'> <FaEdit className='text-blue' /> </Link> */}
            <FormModal table="exam" type="delete" id={item.id} />
            {/* <Link href={`/list/exams/${item.id}`} className='flex items-center justify-center rounded-full bg-gray-300 w-8 h-8'> <FaTrash className='text-red-500' /> </Link> */}
          </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block text-lg font-semibold'>All Exams</h1>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full md:w-auto'>
          <TableSearch />
        <div className='flex items-center gap-4 self-end'>
        <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <Image src="/filter.png" alt="filter" width={14} height={14} /> </button>
        <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <FaSortAmountDown /> </button>
        {role === "admin" && (
        <FormModal table="exam" type="create" />
        )}
        </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default ExamsListPage

