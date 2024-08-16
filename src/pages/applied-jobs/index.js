import Header from '@/components/Header'
import React from 'react'
import cookies from 'js-cookie'
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
    </div>
  )
}

export default AppliedJobs