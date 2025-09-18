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
                href: "/list/students",
                visible: ["admin", "teacher"]
            },
            {
                icon: <RiParentFill />,
                label: "Parent",
                href: "/list/parents",
                visible: ["admin", "teacher"]
            },
            {
                icon: <FaBook />,
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin", "teacher"]
            },
            {
                icon: <FaUser />,
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaClipboardList />,
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher", "student"]
            },
            {
                icon: <FaClipboardList />,
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaTasks />,
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaRegChartBar />,
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaClipboardCheck />,
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: <FaCalendarAlt />,
                label: "Events",
                href: "/list/events",
                visible: ["admin", "student", "parent"]
            },
            {
                icon: <FaComments />,
                label: "Messages",
                href: "/list/messages",
                visible: ["admin"]
            },
            {
                icon: <FaBullhorn />,
                label: "Announcements",
                href: "/list/announcements",
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
import { FaHome, FaUser, FaBook, FaClipboardList, FaTasks, FaClipboardCheck, FaCalendarAlt, FaComments, FaBullhorn, FaUserCircle, FaCog, FaSignOutAlt, FaRegChartBar } from 'react-icons/fa'
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