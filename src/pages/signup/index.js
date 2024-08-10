import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import axios from 'axios';
export default function Signup() {
 
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
      <div className="w-full max-w-md p-8 space-y-8 my-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up</h2>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
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
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name='password'
              onChange={handleFormChange}
              value={formData.password}
              placeholder="Create a password"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
  );
}
