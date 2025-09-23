'use client'
import TableSearch from '@/components/TableSearch'
import React from 'react'
import { FaEdit, FaEye, FaPlus, FaSortAmountDown, FaTrash } from 'react-icons/fa'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { role, studentsData } from '@/lib/data'
import Link from 'next/link'
import FormModal from '@/components/FormModal'

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
}; 

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const StudentsListPage = () => {
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-[#F7F4EA] odd:bg-[#F3F2EC] text-sm hover:bg-amber-50"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-300">
              <FaEye />
            </button>
          </Link>
          {role === "admin" && (
            <>  {/* edit and delete */}
            {/* <Link href={`/list/students/${item.id}`} className='flex items-center justify-center rounded-full bg-gray-300 w-8 h-8'> <FaEdit className='text-blue' /> </Link> */}
            <FormModal table="student" type="update" id={item.id} />
            {/* <Link href={`/list/students/${item.id}`} className='flex items-center justify-center rounded-full bg-gray-300 w-8 h-8'> <FaTrash className='text-red-500' /> </Link> */}
            <FormModal table="student" type="delete" id={item.id} />
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
        <h1 className='hidden md:block text-lg font-semibold'>All Students</h1>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full md:w-auto'>
          <TableSearch />
        <div className='flex items-center gap-4 self-end'>
        <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <Image src="/filter.png" alt="filter" width={14} height={14} /> </button>
        <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <FaSortAmountDown /> </button>
        {role === "admin" && (
        // <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <FaPlus /> </button>
        <FormModal table="student" type="create" />
        )}
        </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default StudentsListPage

