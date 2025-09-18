import React from 'react'
import Image from 'next/image'

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col xl:flex-row gap-4'>
        {/* LEFT SIDE */}
        <div className='w-full xl:w-2/3 bg-red-200'>
        {/* TOP */}
        <div className='flex flex-col lg:flex-row gap-4'>
        {/* user Info Card */}
        <div className='flex-1 flex gap-4 bg-red-500'>
            <div className='w-1/3 bg-yellow-200 flex items-center justify-center'>
            <Image src="https://images.pexels.com/photos/19380858/pexels-photo-19380858.jpeg" alt="user" width={100} height={100} />
            </div>
            <div className='w-2/3 bg-red-200'>
            <h1 className='text-2xl font-bold'>Md. Abdul Rahman</h1>
            <p className='text-sm text-gray-500'>abdul.rahman@school.edu.bd</p>
            </div>
        </div>
        {/* small cards */}
        <div className='flex-1 flex flex-col md:flex-row justify-between items-center bg-blue-200 gap-4 flex-wrap p-4'>
            <div className='w-full md:w-1/2 bg-green-200'>
            <h1 className='text-2xl font-bold'>Md. Abdul Rahman</h1>
            <p className='text-sm text-gray-500'>abdul.rahman@school.edu.bd</p>
            </div>
            <div className='w-1/2 bg-green-200'>
            <h1 className='text-2xl font-bold'>Md. Abdul Rahman</h1>
            <p className='text-sm text-gray-500'>abdul.rahman@school.edu.bd</p>
            </div>
            <div className='w-1/2 bg-green-200'>
            <h1 className='text-2xl font-bold'>Md. Abdul Rahman</h1>
            <p className='text-sm text-gray-500'>abdul.rahman@school.edu.bd</p>
            </div>
            <div className='w-1/2 bg-green-200'>
            <h1 className='text-2xl font-bold'>Md. Abdul Rahman</h1>
            <p className='text-sm text-gray-500'>abdul.rahman@school.edu.bd</p>
            </div>
        </div>
        </div>
        {/* Bottom */}
        <div>Bottom</div>
        </div>
        {/* RIGHT SIDE */}
        <div className='w-full xl:w-1/3 bg-blue-200'>
        right
        </div>
    </div>
  )
}

export default SingleTeacherPage