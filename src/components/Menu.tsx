const menuItems = [
    {
        title: "Menu",
        items: [
            {
                icon: <FaHome />,
                label: "Home",
                href: "/"
            },
            {
                icon: <GiTeacher />,
                label: "Teacher",
                href: "/teacher"
            },
            {
                icon: <PiStudentFill />,
                label: "Student",
                href: "/student"
            },
            {
                icon: <RiParentFill />,
                label: "Parent",
                href: "/parent"
            },
            {
                icon: <FaUser />,
                label: "Classes",
                href: "/classes"
            },
            {
                icon: <FaBook />,
                label: "Lessons",
                href: "/lessons"
            },
            {
                icon: <FaClipboardList />,
                label: "Exams",
                href: "/exams"
            },
            {
                icon: <FaTasks />,
                label: "Assignments",
                href: "/assignments"
            },
            {
                icon: <FaClipboardCheck />,
                label: "Attendance",
                href: "/attendance"
            },
            {
                icon: <FaCalendarAlt />,
                label: "Events",
                href: "/events"
            },
            {
                icon: <FaComments />,
                label: "Messages",
                href: "/messages"
            },
            {
                icon: <FaBullhorn />,
                label: "Announcements",
                href: "/announcements"
            }
        ]
    },
    {
        title: "OTHERS",
        items: [
            {
                icon: <FaUserCircle />,
                label: "Profile",
                href: "/profile"
            },
            {
                icon: <FaCog />,
                label: "Settings",
                href: "/settings"
            },
            {
                icon: <FaSignOutAlt />,
                label: "Logout",
                href: "/logout"
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

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
        {menuItems.map((item) => (
            <div key={item.title} className='flex flex-col gap-2 ml-2'>
                <span className='hidden lg:block text-gray-500 font-light my-2'>{item.title}</span>
                {item.items.map((item) => (
                    <Link href={item.href} key={item.label} className='flex items-center justify-center lg:justify-start gap-4 p-4 text-gray-500 font-light py-2'>    <span>{item.icon}</span><span className='hidden lg:block'>{item.label}</span>
                    </Link>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Menu