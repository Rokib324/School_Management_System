
import TableSearch from '@/components/TableSearch'
import React from 'react'
import { FaEdit, FaEye, FaPlus, FaSortAmountDown, FaTrash } from 'react-icons/fa'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { role } from '@/lib/data'
import Link from 'next/link'
import FormModal from '@/components/FormModal'
import { Class, Subject, Teacher } from '@/generated/prisma'
import  prisma  from '@/lib/prisma'
import { ITEMS_PER_PAGE } from '@/lib/settings'



const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
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


type TeacherList = Teacher & { subjects: Subject[] } & { classes: Class[] };

const renderRow = (item: TeacherList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-[#F7F4EA] odd:bg-[#F3F2EC] text-sm hover:bg-amber-50"
  >
    <td className="flex items-center gap-4 p-4">
      <Image
        src={item.img || "/no_profile_img.png"}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-8 h-8 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.username}</td>
    <td className="hidden md:table-cell">{item.subjects.map((subject) => subject.name).join(",")}</td>
    <td className="hidden md:table-cell">{item.classes.map((classItem) => classItem.name).join(",")}</td>
    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-300">
            <FaEye />
          </button>
        </Link>
        {role === "admin" && (
          <>  {/* edit and delete */}
          {/* <Link href={`/list/teachers/${item.id}`} className='flex items-center justify-center rounded-full bg-gray-300 w-8 h-8'> <FaEdit className='text-blue' /> </Link> */}
          <FormModal table="teacher" type="update" id={Number(item.id)} />
          {/* <Link href={`/list/teachers/${item.id}`} className='flex items-center justify-center rounded-full bg-gray-300 w-8 h-8'> <FaTrash className='text-red-500' /> </Link> */}
          <FormModal table="teacher" type="delete" id={Number(item.id)} />
        </>
        )}
      </div>
    </td>
  </tr>
);

const TeacherListPage = async ({searchParams}: {searchParams: {page?: string} | undefined}) => {
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  
  const data = await prisma.teacher.findMany({
    where: {
      id: "teacher1"
    },
    include: {
      subjects: true,
      classes: true,
    },
    take: ITEMS_PER_PAGE,
    skip: ITEMS_PER_PAGE * (page - 1),
  })

  const count = await prisma.teacher.count();

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>

        <div className='flex flex-col md:flex-row gap-4 items-center w-full md:w-auto'>
          <TableSearch />
        <div className='flex items-center gap-4 self-end'>
        <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <Image src="/filter.png" alt="filter" width={14} height={14} /> </button>
        <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <FaSortAmountDown /> </button>
        {role === "admin" && (
        // <button className='flex items-center justify-center rounded-full bg-yellow w-8 h-8'> <FaPlus /> </button>
        <FormModal table="teacher" type="create" />
        )}
        </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* Pagination */}
      <Pagination page={page} count={count} />
    </div>
  )
}

export default TeacherListPage

