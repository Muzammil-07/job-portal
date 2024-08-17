import Header from '@/components/Header'
import React from 'react'
import cookies from 'js-cookie'
import { BsThreeDotsVertical, BsBookmark, BsBriefcase } from "react-icons/bs";
import { useQuery } from 'react-query'
import axios from 'axios'
const AppliedJobs = () => {
    const id = cookies.get("res")
    const fetchData = async()=>{
   try{
      const res = await axios.get(`http://localhost:5000/api/jobApplication/jobs/${id}/apply`)
      console.log(res)
      return res.data
   }catch(error){
    console.log(error)
   }
    }
    const {isLoading,data}=useQuery("applied",fetchData)
    if(!isLoading){
        console.log(data)
    }
  return (
    <div>
        <Header />
        {
          !isLoading? 
          data?.data.map((doc,index)=>{
            return(
              <div className='px-12 py-2'>
          
              <div
              className="border   border-black rounded-lg px-4 space-y-2 py-1 h-[250px] md:h-[250px] my-2 cursor-pointer"
     
            >
              <div className="flex justify-between">
                <h1 className="font-sans text-xl underline underline-offset-4">
                  {doc.title}
                </h1>
                <button className="text-2xl">
                  <BsThreeDotsVertical />
                </button>
              </div>
              <h2 className='text-lg'>{doc.companyName}</h2>
              <h2 className='text-lg'>{doc.city}</h2>
              <p className='text-md'>{doc.description.slice(0, 200)}</p>
              <h3 className='text-sm'>Applied {doc.appliedAt}</h3>
            </div>
            </div>
            )
          })
        
          :<></>
        }
    </div>
  )
}

export default AppliedJobs