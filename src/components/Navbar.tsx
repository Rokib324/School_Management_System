import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/*searchbar */}
      <div className='hidded md:flex'>
        <span><FaSearch /></span>
      </div>
      {/* ICONS and User */}
      <div></div>
    </div>
  )
}

export default Navbar