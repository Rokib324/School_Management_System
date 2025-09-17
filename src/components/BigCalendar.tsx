'use client'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState } from 'react'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK)

    const handleViewChange = (selectedView: View) => {
        setView(selectedView)
    }

    return (
    <div className='h-screen'>
        <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={['work_week','day']}
      view={view}
      style={{ height: "100%" }}
      onView={handleViewChange}
      min={new Date(2025, 9, 1, 8, 0, 0)}
      max={new Date(2025, 9, 30, 17, 0, 0)}
    />
    </div>
    )

}

export default BigCalendar