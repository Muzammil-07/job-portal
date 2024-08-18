import Header from '@/components/Header'
import React from 'react'
import axios from 'axios'
import { useState,useEffect,useRef } from 'react'
import Link from 'next/link'
import SelectSearch from 'react-select-search'
import jobsData from '../jobs'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import 'react-select-search/style.css'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import cities from '../cities'
const JobPost = () => {
  const MySwal = withReactContent(Swal);
    const [formData,setFormData]=useState({
        title:"",
        companyName:"",
        education:"",
        jobType:"",
        salaryFrom:"",
        salaryTo:"",
        category:"",
        description:""

      })
     const handleFormChange= (event)=>{
     const {name,value} =event.target;
     setFormData((prev)=>({...prev,[name]:value}))
    }
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
      setFormData((e)=>({...e,city:item.name}));
      
    }
  
    const handleOnFocus = () => {
      console.log('Focused')
    }
  
    const formatResult = (item) => {
      return (
        <>
          <span style={{ display: 'block', textAlign: 'left',width:200 }}> {item.name}</span>
        </>
      )
    }
    const handleCancle=()=>{
      setFormData({
        title:"",
        companyName:"",
        education:"",
        jobType:"",
        salaryFrom:"",
        salaryTo:"",
        category:"",
        description:""

      })
    }
    const handleFormSubmit=async(event)=>{
      event.preventDefault()
    
    try{
      const res = await axios.post("http://localhost:5000/api/jobs/post-job",{
       ...formData
      })
      console.log(res);
      MySwal.fire("Job Created Successfully");

      handleCancle();
    }catch(error){
      MySwal.fire({
        icon:"error",
        title:"Opps ",
        text:error
      })
    console.log(error)
    }
    }
    
  return (
    <div className="flex items-center flex-col justify-center  ">
        <Header />
        <div className='py-2 flex justify-around w-full'>
          <div>
          <Link href="/jobpost"><span className='text-xl text-black '>Job Post </span></Link>
          </div>
          <div>
          <Link href="/check-job"><span className='text-xl text-black '>Check Applied Jobs </span></Link>
        </div>
        </div>
      <div className="w-full px-12 p-8 space-y-8 my-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Post a Job</h2>
        <form className=" gap-y-2 gap-x-4 grid grid-cols-2" onSubmit={handleFormSubmit}>
          <div className='px-4 col-span-2 md:col-span-1 '>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
            required
              type="text"
              id="title"
              name='title'
              value={formData.title}
              placeholder="Enter your full name"
              onChange={handleFormChange}
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className='px-4 col-span-2 md:col-span-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
            required
              type="text"
              id="companyName"
              name='companyName'
              value={formData.companyName}
              onChange={handleFormChange}
              placeholder="Enter Company Name"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className='px-4 col-span-2 md:col-span-1'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Employee Education </label>
            <select
            required
              
              id="confirm-password"
              placeholder="Select Required Education"
              name='education'
              onChange={handleFormChange}
              value={formData.education}
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="middle">Middle</option>
                <option value="matric">Matric</option>
                <option value="intermediate">Intermediate</option>
                <option value="bachlors">Bachlors</option>
                <option value="masters">Masters</option>
                </select>
          </div>
          <div className='px-4 col-span-2 md:col-span-1'>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Job Type</label>
            <select
            required
              
              id="jobType"
              placeholder="Select Job Type"
              name='jobType'
              value={formData.jobType}
              onChange={handleFormChange}
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="fullTime">Fulltime</option>
                <option value="partTime">Parttime</option>
                <option value="remote">Remote</option>
                </select>
          </div>
          <div className='px-4 col-span-2 md:col-span-1'>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Salary Range </label>
          <div className='grid grid-cols-2 gap-x-4'>
          <input
          required
          type='number'
          name='salaryFrom'
          value={formData.salaryFrom}
          onChange={handleFormChange}
          placeholder='From'
           className=" px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
          required
          type='number'
          name='salaryTo'
          onChange={handleFormChange}
          value={formData.salaryTo}
          placeholder='To'
           className=" px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          </div>
          </div>
          <div className='px-4 col-span-2 md:col-span-1'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Select City </label>
            <span className='bg-gray-400  w-full'>
            <ReactSearchAutocomplete
            items={cities}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder='Select City'
          />
            </span>
          </div>
          <div className='px-4 col-span-2 md:col-span-1'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Select Category </label>
            <span className='bg-gray-400 w-full'>
            <SelectSearch options={jobsData} name="" value={formData.category} placeholder='choose Category' onChange={(e)=>{setFormData((ep)=>({...ep,category:e}))}} />
            </span>
          </div>
          
          <div className='px-4   col-span-2'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Job Description</label>
            <textarea
              type="email"
              id="email"
              name='description'
              rows="3"
              value={formData.description}
              onChange={handleFormChange}
              placeholder="Enter Full Job Descrption"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className='flex justify-center bg-slate-500 col-span-2'>
          <button
          
            type="submit"
            className=" px-4 w-full   py-2 text-sm  font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post Job
          </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default JobPost