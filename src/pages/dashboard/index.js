import React from 'react'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import Feed from '@/components/Feed'
import axios from 'axios'
import { useQuery } from 'react-query'
const Dashboard = ({Childrens}) => {
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs/get-job");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const {isLoading,data} = useQuery("Jobs", fetchData);
  return (
    <div><Header />
    <SearchBar />
    <div className='grid grid-cols-2 gap-6 text-xl mb-4 '>
      <div className='flex justify-end px-12'>
      <button className='hover:text-blue-600 hover:underline hover:underline-offset-5 border-spacing-5'> Job Feed</button>
      </div>
<div className='felx justify-start px-12'>
<button className='hover:text-blue-600 hover:border-b-4 hover:border-blue-600 border-spacing-5'> Recent Search</button>
</div>
    </div>
    {!isLoading? <Feed data2={data} isLoading={isLoading}/>:<></>
    }
    

    </div>
  )
}

export default Dashboard