import React from 'react'
import { BsSearch,BsGeoAlt } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className='flex justify-center items center py-12'>
        <div className='border-2 flex items-center border-gray-300 px-4 rounded-l-2xl' >
            <label className='text-xl'><BsSearch /></label>
            <input  type='text' placeholder='Job tiltle ,keyword or company' className='py-4 px-2 w-[300px] outline-none '/>
        </div>
        <div className='border-2 flex items-center border-gray-300 px-4 rounded-r-2xl' >
        <label className='text-xl'><BsGeoAlt /></label>
            <input  type='text' placeholder='City,State,or remote' className='py-4 px-2 w-[300px] outline-none '/>
            <button className='bg-blue-700 text-lg hover:bg-blue-900 text-white px-4 py-2 rounded-lg'>Find Jobs</button>
        </div>
    </div>
  )
}

export default SearchBar