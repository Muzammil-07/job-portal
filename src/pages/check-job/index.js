import Header from '@/components/Header'
import React, { useState } from 'react'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import axios from 'axios'
import cookies from 'js-cookie'
import { BsThreeDotsVertical } from 'react-icons/bs'
const CheckJob = () => {
  const router =useRouter();
  const fetchData = async () => {
    try {
      const id = cookies.get('res')
      console.log(id)
      const res = await axios.get('http://localhost:5000/api/jobs/get-job')
      console.log(res.data.data)
      return res?.data?.data?.filter((doc) => {
        return doc.postedBy == id
      })
    } catch (error) {
      console.log(error)
    }
  }
  const { isLoading, data } = useQuery("jobsData", fetchData)
  if (!isLoading) {
    console.log(data)
  }
  const goTo = (doc) => {
    const docString = JSON.stringify(doc);
    router.push({
      pathname: "/application-check",
      query: { data: docString }
    });
  };
  
  return (
    <div>
      <Header />
      <div className='py-2 flex justify-around w-full'>
        <div>
          <Link href="/jobpost"><span className='text-xl text-black '>Job Post </span></Link>
        </div>
        <div>
          <Link href="/check-job"><span className='text-xl text-black '>Check Applied Jobs </span></Link>
        </div>

      </div>
      {!isLoading ?
        data?.map((doc,index) => {
          return (
            <div
              className="border md:block hidden border-black rounded-lg px-2 mx-12 space-y-2 py-2 h-[350px] md:h-[250px] my-2 cursor-pointer"
            key={index}
              onClick={() =>  goTo(doc)
              }
            >
              <div className="flex justify-between">
                <h1 className="font-sans text-xl underline underline-offset-4">
                  {doc.title}
                </h1>
                <button className="text-2xl">
                  <BsThreeDotsVertical />
                </button>
              </div>
              <h4>{doc.companyName}</h4>
              <h5>{doc.city}</h5>
              <p>{doc.description.slice(0, 200)}</p>
              <h6 className='text-blue-700 '>{doc.applicantCount} Person Applied for this Job</h6>
            </div>
          )
        }) : ""}

    </div>
  )
}

export default CheckJob