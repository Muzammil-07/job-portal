import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex justify-center items center py-12'>
        <div className='border-2 border-gray-300 px-4 rounded-l-2xl' >
            <label>Search</label>
            <input  type='text' className='py-4 px-2 w-[300px] outline-none '/>
        </div>
        <div className='border-2 border-gray-300 px-4 rounded-r-2xl' >
            <label>Search</label>
            <input  type='text' className='py-4 px-2 w-[300px] outline-none '/>
            <button className='bg-blue-900 text-lg text-white px-4 py-2 rounded-lg'>Search</button>
        </div>
    </div>
  )
}

export default SearchBar