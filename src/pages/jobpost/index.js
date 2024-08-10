import Header from '@/components/Header'
import React from 'react'
import axios from 'axios'
import { useState,useEffect,useRef } from 'react'
import Link from 'next/link'
import SelectSearch from 'react-select-search'
import jobsData from '../jobs'
import 'react-select-search/style.css'
const JobPost = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
      })
     const handleFormChange= (event)=>{
     const {name,value} =event.target;
     setFormData((prev)=>({...prev,[name]:value}))
    }
    const handleCancle=()=>{
      setFormData({
        name:"",
        email:"",
        password:""
      })
    }
    const handleFormSubmit=async(event)=>{
      event.preventDefault()
    
    try{
      const res = await axios.post("http://localhost:5000/api/auth/signup",{
        name:formData.name,
        email:formData.email,
        password:formData.password
      })
      console.log(res);
      alert("SignUp Successfully");
      handleCancle();
    }catch(error){
    console.log(error)
    }
    }
    
  return (
    <div className="flex items-center flex-col justify-center  ">
        <Header />
      <div className="w-full px-12 p-8 space-y-8 my-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Post a Job</h2>
        <form className=" gap-y-2 gap-x-4 grid grid-cols-2" onSubmit={handleFormSubmit}>
          <div className='px-4'>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              id="name"
              name='name'
              value={formData.name}
              placeholder="Enter your full name"
              onChange={handleFormChange}
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className='px-4'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="email"
              id="email"
              name='email'
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className='px-4'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Employee Education </label>
            <select
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option>Middle</option>
                <option>Matric</option>
                <option>Intermediate</option>
                <option>Bachlors</option>
                <option>Masters</option>
                </select>
          </div>
          <div className='px-4'>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Job Type</label>
            <select
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option>Fulltime</option>
                <option>Parttime</option>
                <option>Remote</option>
                </select>
          </div>
          <div className='px-4'>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Salary Range </label>
          <div className='grid grid-cols-2 gap-x-4'>
          <input
          type='number'
          placeholder='From'
           className=" px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
          type='number'
          placeholder='To'
           className=" px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          </div>
          </div>
          <div className='px-4'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Employee Education </label>
            <select
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option>Middle</option>
                <option>Matric</option>
                <option>Intermediate</option>
                <option>Bachlors</option>
                <option>Masters</option>
                </select>
          </div>
          <div className='px-4'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Category </label>
            <SelectSearch options={jobsData}  value="sv" placeholder='choose Category' onChange={(e)=>{console.log(e)}} name="category"/>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm col-span-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login">
            <span className="font-medium text-indigo-600 hover:text-indigo-500">Login</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default JobPost