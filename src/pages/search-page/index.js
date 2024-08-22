import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import SearchFeed from '@/components/SearchFeed'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const SearchPage = () => {
    const [city,setCity]=useState(null);
    const[serchResult,setSearchResult]=useState(0)
    const [category,setCategory]=useState(null)
    const router= useRouter()
      useEffect(()=>{
           const {city,category}=useRouter;
           setCity(city);
           setCategory(category)
      },[router.query])
      const searchCount=(doc)=>{
      setSearchResult(doc)
      }
  return (
    <div>
        <Header />
        <SearchBar />
        <div className='px-12 text-lg underline underline-offset-4'>Search Result  {serchResult}</div>
        <SearchFeed city={city} category={category} searchCount={searchCount}  />
    </div>
  )
}

export default SearchPage