import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical, BsBookmark, BsBriefcase } from "react-icons/bs";

import { GrCurrency } from "react-icons/gr";
const JobView = () => {
    const [data,setData]=useState({});
    const [isLoading,setIsLoading]=useState(false)
    const router =useRouter()
  useEffect(()=>{
 let queryData=router?.query?.data;
 if(queryData){
    let parsedData=JSON.parse(queryData)
    console.log(parsedData)
    setData(parsedData);
    setIsLoading(true)
 }

  },[router?.query])
  if(!isLoading){
    console.log(data)
  }
  return (
    <div>
        <Header />
        <div>
           {
            isLoading? <div className="border border-black rounded-lg px-4 space-y-1 py-2 h-full  overflow-y-scroll ">
            <h1 className="font-sans text-2xl ">{data?.title}</h1>
  
            <h2 className="text-xl underline underline-offset-2">
              {data?.companyName}
            </h2>
            <h2 className="text-lg">{data?.city}</h2>
            <h2 className="text-lg">Rs {data?.salaryFrom}-{data?.salaryTo}</h2>
            <div className="flex gap-x-3">
              <button
                className="px-3 py-1 text-white text-lg bg-blue-700 hover:bg-blue-800 rounded-md my-2 font-bold"
                onClick={() => {
                  applyJob(data?._id);
                }}
              >
                Apply Now
              </button>
              <button className="px-3  bg-slate-200 rounded-md">
                <BsBookmark />
              </button>
              <button className="px-3  bg-slate-200 rounded-md">0</button>
            </div>
            <div className="border-t-2 my-4 py-2 space-y-3 ">
              <h1 className="text-xl py-3 font-bold">Job Details</h1>
              <span className="flex gap-x-2 items-center">
                <GrCurrency />
                <h4 className="text-lg font-bold text-gray-600">Pay</h4>
              </span>
              <div>
              <h2 className="text-lg">Rs {data?.salaryFrom}-{data?.salaryTo}</h2>
              </div>
              <button>{data?.salary}</button>
              <span className="flex gap-x-2 items-center">
                <BsBriefcase />
                <h4 className="text-lg font-bold text-gray-600">Job Type</h4>
              </span>
              <button>{data?.jobType}</button>
              <h2 className="text-lg font-bold">Full Job Detail</h2>
              <p>{data?.description}</p>
            </div>
          </div>:<div>Loading</div>
           } 
        </div>
    </div>
  )
}

export default JobView