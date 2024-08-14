import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import SearchFeed from '@/components/SearchFeed'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const SearchPage = () => {
    const [city,setCity]=useState(null);
    const [category,setCategory]=useState(null)
    const router= useRouter()
      useEffect(()=>{
           const {city,category}=useRouter;
           setCity(city);
           setCategory(category)
      },[router.query])
  return (
    <div>
        <Header />
        <SearchBar />
        <SearchFeed city={city} category={category} />
    </div>
  )
}

export default SearchPage