import Header from '@/components/Header'
import React, { useState } from 'react'
import Link from 'next/link'
import { useQuery } from 'react-query'
const CheckJob = () => {
    const {isLoading,data}=useQuery("")
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
    </div>
  )
}

export default CheckJob