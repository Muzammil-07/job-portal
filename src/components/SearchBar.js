import cities from '@/pages/cities';
import React, { useState } from 'react'
import { BsSearch,BsGeoAlt } from "react-icons/bs";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useRouter } from 'next/router';
import jobs2 from '@/pages/jobs2';
const SearchBar = () => {
  const router=useRouter()
const [city,setCity]=useState(null);
const [category,setCategory]=useState(null)
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item.name)
    setCategory(item.name);
    
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const handleOnSearchCity = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHoverCity = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelectCity = (item) => {
    // the item selected
    console.log(item.name)
    setCity(item.name)
    
  }

  const handleOnFocusCity = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left',width:200 }}> {item.name}</span>
      </>
    )
  }
  const gotoSearch=()=>{
    if(city&&category){
    router.push({pathname:"/search-page",query:{city,category}})
    localStorage.setItem("city",city);
    localStorage.setItem("category",category)
    }
  }
  return (
    <div className='flex flex-col md:flex-row justify-center items center py-12'>
        <div className='border-2 flex items-center border-gray-300 px-4 rounded-l-2xl' >
            <label className='text-xl'><BsSearch /></label>
            {/* <input  type='text' placeholder='Job tiltle ,keyword or company' className='py-4 px-2 w-[300px] outline-none '/> */}
           <div className='w-[100px] md:w-[300px]'>
            <ReactSearchAutocomplete
            items={jobs2}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder='Keyword'
            showIcon={false}
            styling={
              { 

                boxShadow:"0 0 0 ",
                border:"0",
                
              }
            }
          />
        </div>
        </div>
        <div className='border-2 flex items-center border-gray-300 px-4 rounded-r-2xl' >
        <label className='text-xl'><BsGeoAlt /></label>
            {/* <input  type='text' placeholder='City,State,or remote' className='py-4 px-2 w-[300px] outline-none '/> */}
            <div className='w-[200px] md:w-[300px]'>
            <ReactSearchAutocomplete
            items={cities}
            onSearch={handleOnSearchCity}
            onHover={handleOnHoverCity}
            onSelect={handleOnSelectCity}
            onFocus={handleOnFocusCity}
            autoFocus
            formatResult={formatResult}
            placeholder='City,State,or remote'
            showIcon={false}
            styling={
              {

                boxShadow:"0 0 0 ",
                border:"0",
                
              }
            }
          />
        </div> 
            <button onClick={gotoSearch} className='bg-blue-700 text-lg hover:bg-blue-900 text-white px-4 py-1 rounded-lg'>Find Jobs</button>
        </div>
    </div>
  )
}

export default SearchBar