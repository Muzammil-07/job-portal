import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from 'next/router';
export default function Login() {
  const MySwal = withReactContent(Swal);
  const router =useRouter();
  const [formData,setFormData]=useState({
 
    email:"",
    password:""
  })
 const handleFormChange= (event)=>{
 const {name,value} =event.target;
 setFormData((prev)=>({...prev,[name]:value}))
}
const handleCancle=()=>{
  setFormData({

    email:"",
    password:""
  })
}
const handleFormSubmit=async(event)=>{
  event.preventDefault();
try{
  const res = await axios.post("http://localhost:5000/api/auth/login",{
    email:formData.email,
    password:formData.password
  })
  console.log(res);
  MySwal.fire("login Successfully");
  router.reload("/dashboard")

  handleCancle();
}catch(error){
console.log(error)
}
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              required
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
              required
              value={formData.password}
              onChange={handleFormChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup">
            <a className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
