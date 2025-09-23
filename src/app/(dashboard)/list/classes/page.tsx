'use client'
import TableSearch from '@/components/TableSearch'
import React from 'react'
import { FaEdit, FaEye, FaPlus, FaSortAmountDown, FaTrash } from 'react-icons/fa'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { classesData, role } from '@/lib/data'
import Link from 'next/link'
import FormModal from '@/components/FormModal'

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
}; 

const columns = [
  {
    header: "Class Name",
    accessor: "info",
  },

  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassesListPage = () => {
  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-[#F7F4EA] odd:bg-[#F3F2EC] text-sm hover:bg-amber-50"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/classes/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-300">
              <FaEye />
            </button>
          </Link>
          {role === "admin" && (
            <>  {/* edit and delete */}
            <FormModal table="class" type="update" id={item.id} />
            {/* <Link href={`/list/classes/${item.id}`} className='flex items-center justify-center rounded-full bg-gray-300 w-8 h-8'> <FaEdit className='text-blue' /> </Link> */}
            <FormModal table="class" type="delete" id={item.id} />
            {/* <Link href={`/list/classes/${item.id}`} className='flex items-center justify-center rounded-full bg-gray-300 w-8 h-8'> <FaTrash className='text-red-500' /> </Link> */}
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
        <h1 className='hidden md:block text-lg font-semibold'>All Classes</h1>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full md:w-auto'>
          <TableSearch />
        <div className='flex items-center gap-4 self-end'>
        <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <Image src="/filter.png" alt="filter" width={14} height={14} /> </button>
        <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <FaSortAmountDown /> </button>
        {role === "admin" && (
        <FormModal table="class" type="create" />
        )}
        </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default ClassesListPage

