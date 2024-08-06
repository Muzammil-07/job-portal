import Dashboard from '@/pages/dashboard'
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
const Feed = () => {
  const data = [
    {
      companyName: "vision Tech",
      city: "karachi",
      title: "Web Designing and front-end developer Intern",
      salary: "10,000 - Rs 15,000",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      education:"Bachlors"
    
    }
  ]
  return (

    <div className='px-12 grid grid-cols-2'>
     <div className='border border-black rounded-lg px-4 space-y-2 py-2'>
      <div className='flex justify-between'>
      <h1 className='font-sans text-xl underline underline-offset-4'>{data[0].title}</h1>
       <button className='text-2xl'><BsThreeDotsVertical /></button>
      </div>
      <h2>{data[0].companyName}</h2>
      <h2>{data[0].city}</h2>
      <p>{data[0].description.slice(0,200)}</p>
      <h3>Active 3 days ago</h3>
     </div>
     <div>
      
     </div>
    </div>

  )
}

export default Feed