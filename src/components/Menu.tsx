const menuItems = [
    {
        title: "Menu",
        items: [
            {
                icon: <FaHome />,
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <GiTeacher />,
                label: "Teacher",
                href: "/list/teachers",
                visible: ["admin", "teacher"]
            },
            {
                icon: <PiStudentFill />,
                label: "Student",
                href: "/student",
                visible: ["admin", "teacher"]
            },
            {
                icon: <RiParentFill />,
                label: "Parent",
                href: "/parent",
                visible: ["admin", "teacher"]
            },
            {
                icon: <FaUser />,
                label: "Classes",
                href: "/classes",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaBook />,
                label: "Lessons",
                href: "/lessons",
                visible: ["admin", "teacher", "student"]
            },
            {
                icon: <FaClipboardList />,
                label: "Exams",
                href: "/exams",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaTasks />,
                label: "Assignments",
                href: "/assignments",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaClipboardCheck />,
                label: "Attendance",
                href: "/attendance",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaCalendarAlt />,
                label: "Events",
                href: "/events",
                visible: ["admin", "student", "parent"]
            },
            {
                icon: <FaComments />,
                label: "Messages",
                href: "/messages",
                visible: ["admin"]
            },
            {
                icon: <FaBullhorn />,
                label: "Announcements",
                href: "/announcements",
                visible: ["admin", "teacher", "student", "parent"]
            }
        ]
    },
    {
        title: "OTHERS",
        items: [
            {
                icon: <FaUserCircle />,
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaCog />,
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaSignOutAlt />,
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"]
            }
        ]
    }
]







import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaBook, FaClipboardList, FaTasks, FaClipboardCheck, FaCalendarAlt, FaComments, FaBullhorn, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa'
import { RiParentFill } from 'react-icons/ri'
import { GiTeacher } from 'react-icons/gi'
import { PiStudentFill } from 'react-icons/pi'
import { role } from '@/lib/data'

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
        {menuItems.map((item) => (
            <div key={item.title} className='flex flex-col gap-2 ml-2'>
                <span className='hidden lg:block text-gray-500 font-light my-2'>{item.title}</span>
                {item.items.map((item) => {
                    if(item.visible.includes(role)){
                        return (
                            <Link href={item.href} key={item.label} className='flex items-center justify-center lg:justify-start gap-4 p-4 text-gray-500 font-light py-2 rounded-md hover:bg-sky-light'>    <span>{item.icon}</span><span className='hidden lg:block'>{item.label}</span>
                    </Link>
                        );
                    }
                })}
            </div>
        ))}
    </div>
  )
}

export default Menu